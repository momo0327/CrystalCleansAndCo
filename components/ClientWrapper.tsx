'use client';

import { useEffect, useState } from 'react';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Immediately set mounted to true
    setIsMounted(true);

    // Fallback: Force mounted state after 100ms even if something goes wrong
    const fallbackTimer = setTimeout(() => {
      setIsMounted(true);

      // Force enable pointer events globally as a safety net
      if (typeof document !== 'undefined') {
        document.body.style.pointerEvents = 'auto';
      }
    }, 100);

    // Additional safety: Ensure interactivity after 500ms
    const safetyTimer = setTimeout(() => {
      if (typeof document !== 'undefined') {
        document.body.style.pointerEvents = 'auto';
        const main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).style.pointerEvents = 'auto';
        }
      }
    }, 500);

    return () => {
      clearTimeout(fallbackTimer);
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <div className={isMounted ? 'mounted' : 'mounting'} style={{ pointerEvents: 'auto' }}>
      {children}
    </div>
  );
}
