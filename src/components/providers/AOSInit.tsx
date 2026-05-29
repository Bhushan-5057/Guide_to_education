'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    // Dynamically import AOS to prevent server-side global module evaluation issues
    import('aos').then((AOSModule) => {
      AOSModule.default.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
        offset: 100,
      });
    });
  }, []);

  return null;
}
