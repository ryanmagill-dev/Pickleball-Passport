import manifest from '@/components/marketing/hero-poster-manifest.json';
import Image from 'next/image';

type PosterSet = {
  mobile: number[];
  desktop: number[];
};

const posters = manifest as Record<string, PosterSet>;

type Props = {
  poster: string;
  /** Preload the phone-sized poster. Use only for the first-screen hero. */
  priority?: boolean;
};

function variantUrl(poster: string, width: number, ext: 'avif' | 'webp'): string {
  return `${poster.replace(/\.(jpe?g|png|webp|avif)$/i, '')}-${width}.${ext}`;
}

function srcSet(poster: string, widths: number[], ext: 'avif' | 'webp'): string {
  return widths.map((width) => `${variantUrl(poster, width, ext)} ${width}w`).join(', ');
}

/**
 * Full-bleed still for a hero. Phones get a compressed AVIF/WebP at the
 * viewport width. Wider screens get a larger file. The original JPEG is not requested.
 */
export function HeroPoster({ poster, priority = false }: Props) {
  const set = posters[poster];
  if (!set) {
    return (
      <Image
        src={poster}
        alt=""
        fill
        sizes="100vw"
        priority={priority}
        className="object-cover object-center"
      />
    );
  }

  const mobileAvif = srcSet(poster, set.mobile, 'avif');
  const mobileWebp = srcSet(poster, set.mobile, 'webp');
  const desktopAvif = srcSet(poster, set.desktop, 'avif');
  const desktopWebp = srcSet(poster, set.desktop, 'webp');
  const fallback = variantUrl(poster, set.mobile[set.mobile.length - 1] ?? set.desktop[0], 'webp');

  return (
    <>
      {priority && (
        <link
          rel="preload"
          as="image"
          type="image/avif"
          media="(max-width: 1023px)"
          imageSrcSet={mobileAvif}
          imageSizes="100vw"
          fetchPriority="high"
        />
      )}
      <picture className="absolute inset-0">
        <source media="(min-width: 1024px)" type="image/avif" srcSet={desktopAvif} sizes="100vw" />
        <source media="(min-width: 1024px)" type="image/webp" srcSet={desktopWebp} sizes="100vw" />
        <source type="image/avif" srcSet={mobileAvif} sizes="100vw" />
        <source type="image/webp" srcSet={mobileWebp} sizes="100vw" />
        <img
          src={fallback}
          alt=""
          srcSet={mobileWebp}
          sizes="100vw"
          fetchPriority={priority ? 'high' : 'auto'}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          className="h-full w-full object-cover object-center"
        />
      </picture>
    </>
  );
}
