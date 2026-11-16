#!/usr/bin/env bash
# Build sized AVIF and WebP hero posters next to each source JPEG.
# Phones use the <=800px files. Desktop uses the larger ones. Re-run after
# replacing a source poster. Requires ffmpeg with libwebp and libsvtav1.
set -euo pipefail

cd "$(dirname "$0")/.."

files=(
  public/images/posters/hero-drone-poster.jpg
  public/images/posters/chiang-mai-header-poster.jpg
  public/images/posters/hua-hin-cave-poster.jpg
  public/images/posters/tpp-aerial-0453-poster.jpg
  public/images/posters/tpp-aerial-0450-poster.jpg
  public/images/posters/chiang-mai-pill-poster.jpg
  public/images/playbook-sunset-poster.jpg
)

manifest="components/marketing/hero-poster-manifest.json"
tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT

encode() {
  local src="$1" width="$2" stem="$3"
  local avif_crf=28 webp_q=70
  if (( width <= 800 )); then
    avif_crf=40
    webp_q=52
  fi
  local avif="${stem}-${width}.avif"
  local webp="${stem}-${width}.webp"
  ffmpeg -y -hide_banner -loglevel error -i "$src" \
    -vf "scale=${width}:-2:flags=lanczos" -frames:v 1 \
    -c:v libsvtav1 -preset 8 -crf "$avif_crf" -pix_fmt yuv420p -an "$avif"
  ffmpeg -y -hide_banner -loglevel error -i "$src" \
    -vf "scale=${width}:-2:flags=lanczos" -frames:v 1 \
    -c:v libwebp -quality "$webp_q" -compression_level 6 -an "$webp"
  printf '  %s  avif %s bytes  webp %s bytes\n' "$width" "$(wc -c < "$avif")" "$(wc -c < "$webp")"
}

json_entries=()

for src in "${files[@]}"; do
  stem="${src%.*}"
  source_width="$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$src")"
  echo "$src (${source_width}px)"
  rm -f "${stem}"-*.avif "${stem}"-*.webp

  widths=()
  for candidate in 640 800 1200 1920; do
    if (( candidate <= source_width )); then
      widths+=("$candidate")
    fi
  done
  if (( ${#widths[@]} == 0 )); then
    even=$(( source_width - source_width % 2 ))
    widths+=("$even")
  fi
  largest="${widths[${#widths[@]}-1]}"
  if (( source_width > largest + 40 && source_width <= 1920 )); then
    even=$(( source_width - source_width % 2 ))
    if (( even != largest )); then
      widths+=("$even")
    fi
  fi

  mobile=()
  desktop=()
  for width in "${widths[@]}"; do
    encode "$src" "$width" "$stem"
    if (( width <= 800 )); then
      mobile+=("$width")
    else
      desktop+=("$width")
    fi
  done
  if (( ${#desktop[@]} == 0 )); then
    desktop+=("${widths[${#widths[@]}-1]}")
  fi
  if (( ${#mobile[@]} == 0 )); then
    mobile+=("${widths[0]}")
  fi

  public_path="/${src#public/}"
  mobile_json="$(IFS=,; echo "${mobile[*]}")"
  desktop_json="$(IFS=,; echo "${desktop[*]}")"
  json_entries+=("$(printf '  "%s": {"mobile": [%s], "desktop": [%s]}' "$public_path" "$mobile_json" "$desktop_json")")
done

{
  echo '{'
  for i in "${!json_entries[@]}"; do
    comma=','
    if (( i == ${#json_entries[@]} - 1 )); then
      comma=''
    fi
    printf '%s%s\n' "${json_entries[$i]}" "$comma"
  done
  echo '}'
} > "$manifest"

echo "wrote $manifest"
