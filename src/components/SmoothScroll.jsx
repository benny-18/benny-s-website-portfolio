import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1,
      smoothWheel: true,
      smoothTouch: false,
    });

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const id = target.getAttribute('href');
      if (id && id.startsWith('#') && id.length > 1) {
        e.preventDefault();
        lenis.scrollTo(id, {
          duration: 3,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <div className="w-full min-h-screen">{children}</div>;
}