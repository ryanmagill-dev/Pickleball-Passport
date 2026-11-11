'use client';

import { createContext, useContext, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { reservePathFromWindow } from '@/lib/attribution-browser';

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

  // Read attribution at click time instead of useSearchParams, which would force
  // the whole app (this provider wraps every page) into client-side rendering.
  const openLeadModal = useCallback(() => {
    router.push(reservePathFromWindow());
  }, [router]);

  return (
    <LeadModalContext.Provider value={{ openLeadModal }}>
      {children}
    </LeadModalContext.Provider>
  );
}
