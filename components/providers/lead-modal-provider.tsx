'use client';

import { createContext, useContext, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface LeadModalContextValue {
  openLeadModal: (tripName?: string) => void;
}

const LeadModalContext = createContext<LeadModalContextValue>({
  openLeadModal: () => {},
});

export function useLeadModal() {
  return useContext(LeadModalContext);
}

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // Read ?ref at click time instead of useSearchParams, which would force
  // the whole app (this provider wraps every page) into client-side rendering.
  const openLeadModal = useCallback(() => {
    const ref = new URLSearchParams(window.location.search).get('ref');
    router.push(ref ? `/reserve?ref=${encodeURIComponent(ref)}` : '/reserve');
  }, [router]);

  return (
    <LeadModalContext.Provider value={{ openLeadModal }}>
      {children}
    </LeadModalContext.Provider>
  );
}
