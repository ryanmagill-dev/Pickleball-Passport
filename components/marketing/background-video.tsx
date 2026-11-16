'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { HeroPoster } from '@/components/marketing/hero-poster';

type Props = {
  src: string;
  poster: string;
  /** When false, smaller screens keep the poster and never request the file. */
  showPlayControl?: boolean;
  playControlClassName?: string;
  /** First-screen hero: preload the phone poster. */
  priority?: boolean;
  /** Below the fold: do not request the poster until the frame is near. */
  deferUntilVisible?: boolean;
  /** fixed keeps playbook footage clipped to the hero while the page scrolls. */
  position?: 'absolute' | 'fixed';
};

const DESKTOP_VIDEO_QUERY = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';

function subscribeDesktopVideo(onChange: () => void) {
  const media = window.matchMedia(DESKTOP_VIDEO_QUERY);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

function desktopVideoSnapshot() {
  return window.matchMedia(DESKTOP_VIDEO_QUERY).matches;
}

function desktopVideoServerSnapshot() {
  return false;
}

/**
 * Background clip for marketing heroes.
 * The still is a sized AVIF/WebP. The mp4 is mounted only on screens 1024px
 * and wider that are not asking for reduced motion, or after a tap.
 * Phones never download the file on first paint.
 */
export function BackgroundVideo({
  src,
  poster,
  showPlayControl = true,
  playControlClassName = 'bottom-28 left-4',
  priority = false,
  deferUntilVisible = false,
  position = 'absolute',
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [visible, setVisible] = useState(!deferUntilVisible);
  const canAutoplay = useSyncExternalStore(
    subscribeDesktopVideo,
    desktopVideoSnapshot,
    desktopVideoServerSnapshot,
  );

  useEffect(() => {
    if (!deferUntilVisible || visible) return;
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { rootMargin: '480px 0px' },
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, [deferUntilVisible, visible]);

  useEffect(() => {
    if (!play) return;
    const video = videoRef.current;
    if (!video) return;
    video.src = src;
    video.play().catch(() => {});
  }, [play, src]);

  const mountVideo = visible && (canAutoplay || play);
  const frameClass = position === 'fixed' ? 'fixed inset-0' : 'absolute inset-0';

  return (
    <div ref={frameRef} className={`pointer-events-none ${frameClass}`}>
      {visible && !videoPlaying && <HeroPoster poster={poster} priority={priority} />}
      {mountVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onPlaying={() => setVideoPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center ${play ? 'block' : 'hidden lg:block'}`}
        >
          {!play && <source src={src} type="video/mp4" media={DESKTOP_VIDEO_QUERY} />}
        </video>
      )}
      {visible && !play && showPlayControl && (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className={`pointer-events-auto absolute z-20 inline-flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-black/70 lg:hidden ${playControlClassName}`}
        >
          <span
            aria-hidden="true"
            className="inline-block h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white"
          />
          Play video
        </button>
      )}
    </div>
  );
}
