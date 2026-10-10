'use client';

/**
 * Follow Us links (footer) + optional Facebook Page plugin.
 *
 * All URLs live in SOCIAL_CONFIG below. Any value still starting with "TODO_"
 * is hidden, so an unfilled link never renders as a broken link.
 */

import { useEffect, useRef, useState } from 'react';
import { Facebook, Instagram, Linkedin, type LucideProps } from 'lucide-react';

export const SOCIAL_CONFIG = {
  // TODO(Ryan): replace with the real Facebook Page URL (e.g. https://www.facebook.com/yourpage).
  // This is the share link already on the site. It works as a link, but the Page plugin below needs a real Page URL.
  facebookPageUrl: 'https://www.facebook.com/share/1CS1Rar7iR/?mibextid=wwXIfr',
  // TODO(Ryan): confirm this is the right Instagram URL (it's the one already on the site).
  instagramUrl: 'https://www.instagram.com/pickleball.passport',
  // TODO(Ryan): replace with the real URL
  tiktokUrl: 'TODO_TIKTOK_URL',
  // TODO(Ryan): replace with the company LinkedIn Page URL. Currently Jaron's personal profile (the link already on the site).
  linkedinUrl: 'https://www.linkedin.com/in/jaron-shoptaugh-ab675574/',
  // Facebook Page plugin: embeds the Page's feed. Off by default.
  // It only works with Facebook *Pages*, not personal profiles or share links.
  // It's a heavy iframe, so it only loads after the visitor scrolls near it or taps "Load Facebook feed".
  showFacebookPagePlugin: false,
};

const isFilled = (url: string) => url !== '' && !url.startsWith('TODO_');

const TikTokIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.17a8.16 8.16 0 004.77 1.52V7.24a4.85 4.85 0 01-1.01-.55z" />
  </svg>
);

const links = [
  { name: 'Facebook', href: SOCIAL_CONFIG.facebookPageUrl, icon: Facebook },
  { name: 'Instagram', href: SOCIAL_CONFIG.instagramUrl, icon: Instagram },
  { name: 'TikTok', href: SOCIAL_CONFIG.tiktokUrl, icon: TikTokIcon },
  { name: 'LinkedIn', href: SOCIAL_CONFIG.linkedinUrl, icon: Linkedin },
].filter((link) => isFilled(link.href));

export function FollowUs() {
  const showPlugin = SOCIAL_CONFIG.showFacebookPagePlugin && isFilled(SOCIAL_CONFIG.facebookPageUrl);
  if (links.length === 0 && !showPlugin) return null;

  return (
    <div>
      {links.length > 0 && (
        <>
          <p className="text-sm font-semibold tracking-wider text-[#B08D55] uppercase mb-3">Follow us</p>
          <div className="flex space-x-3">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-[#B08D55] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={item.name}
              >
                <item.icon className="h-5 w-5 text-white" />
              </a>
            ))}
          </div>
        </>
      )}
      {showPlugin && <FacebookPagePlugin pageUrl={SOCIAL_CONFIG.facebookPageUrl} />}
    </div>
  );
}

function FacebookPagePlugin({ pageUrl }: { pageUrl: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || load) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLoad(true);
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [load]);

  const src = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(pageUrl)}&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false`;

  return (
    <div ref={ref} className="mt-6 w-full max-w-[340px]">
      {load ? (
        <iframe
          src={src}
          title="The Pickleball Passport on Facebook"
          loading="lazy"
          width={340}
          height={500}
          className="w-full rounded-xl border-0 bg-white"
          allow="encrypted-media"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoad(true)}
          className="min-h-11 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-sm text-white/80 transition-colors"
        >
          Load Facebook feed
        </button>
      )}
    </div>
  );
}
