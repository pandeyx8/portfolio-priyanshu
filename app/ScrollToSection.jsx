'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToSection() {
  const pathname = usePathname();

  useEffect(() => {
    // Only scroll if there's a hash AND it's not the initial page load
    // Skip scrolling on initial load to prevent unwanted auto-scroll
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash;
      // Check if this is not the initial page load
      const isInitialLoad = performance.navigation?.type === 1 || performance.getEntriesByType('navigation')[0]?.type === 'navigate';
      
      if (!isInitialLoad) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [pathname]);

  return null;
}
