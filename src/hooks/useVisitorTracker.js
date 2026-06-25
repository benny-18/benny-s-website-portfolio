import { useEffect } from 'react';

export const useVisitorTracker = () => {
  useEffect(() => {
    if (sessionStorage.getItem('visitor_tracked')) return;

    const trackVisitor = async () => {
      try {
        const time = new Intl.DateTimeFormat(navigator.language || 'en-US', {
          dateStyle: 'full',
          timeStyle: 'long',
        }).format(new Date());

        const payload = {
          time,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'Direct / None',
          currentPath: window.location.pathname,
          language: navigator.language || 'Unknown',
          screenResolution: `${window.innerWidth}x${window.innerHeight}`,
        };

        const response = await fetch('/api/notify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          sessionStorage.setItem('visitor_tracked', 'true');
        }
      } catch (error) {
        console.error('Visitor tracking failed:', error);
      }
    };

    trackVisitor();
  }, []);
};
