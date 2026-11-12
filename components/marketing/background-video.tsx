'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  poster: string;
  /** When false, smaller screens keep the poster and never request the file. */
  showPlayControl?: boolean;
  playControlClassName?: string;
  priority?: boolean;
};

/**
 * Background clip for marketing heroes.
 * Screens 1024px and wider autoplay. Smaller screens show the poster and
 * load the file only after a tap. The source media query keeps the mp4 off
 * the first mobile download.
 */
export function BackgroundVideo({
  src,
  poster,
  showPlayControl = true,
  playControlClassName = 'bottom-28 left-4',
  priority = false,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState(false);

  function onPlay() {
    const video = videoRef.current;
    if (!video) return;
    video.src = src;
    video.play().catch(() => {});
    setPlay(true);
  }

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        preload="none"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source
          src={src}
          type="video/mp4"
          media={play ? undefined : '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'}
        />
      </video>
      {!play && (
        <Image
          src={poster}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center lg:hidden"
        />
      )}
      {!play && showPlayControl && (
        <button
          type="button"
          onClick={onPlay}
          className={`absolute z-20 inline-flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-black/70 lg:hidden ${playControlClassName}`}
        >
          <span
            aria-hidden="true"
            className="inline-block h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white"
          />
          Play video
        </button>
      )}
    </>
  );
}
