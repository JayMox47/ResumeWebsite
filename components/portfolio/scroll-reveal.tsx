'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollReveal() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window) || !Element.prototype.animate)
      return;
    const animations = new Map<Animation, HTMLElement>();
    const revealed = new WeakSet<Element>();
    const selector =
      'main .page-intro, main .section-heading, main .experience-preview-row, main .project-entry, main .job, main .resume-skills > div, main .contact-callout';
    const reveal = (element: HTMLElement, index: number) => {
      if (
        motion.matches ||
        revealed.has(element) ||
        element.dataset.revealed === 'true'
      )
        return;
      revealed.add(element);
      element.dataset.revealed = 'true';
      const animation = element.animate(
        [
          {
            opacity: 0.15,
            translate: `${element.matches('.project-entry, .job') ? '-24px' : '0'} 76px`,
            scale: '0.97',
          },
          { opacity: 1, translate: '0 0', scale: '1' },
        ],
        {
          duration: 760,
          delay: Math.min(index * 75, 225),
          easing: 'cubic-bezier(.2, .8, .2, 1)',
          fill: 'backwards',
        },
      );
      animations.set(animation, element);
      const release = () => {
        element.style.removeProperty('will-change');
        animations.delete(animation);
      };
      animation.onfinish = release;
      animation.oncancel = release;
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          reveal(entry.target as HTMLElement, index);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -24px 0px' },
    );
    const stop = () => {
      observer.disconnect();
      animations.forEach((element, animation) => {
        element.style.removeProperty('will-change');
        animation.cancel();
      });
      animations.clear();
    };
    const start = () => {
      if (motion.matches) return;
      const elements = [...document.querySelectorAll<HTMLElement>(selector)];
      // Read geometry together, then start above-the-fold entrances before paint.
      const initiallyVisible =
        pathname !== '/'
          ? elements.filter((element) => {
              const rect = element.getBoundingClientRect();
              return rect.top < window.innerHeight - 24 && rect.bottom > 0;
            })
          : [];
      initiallyVisible.forEach((element, index) => reveal(element, index));
      elements.forEach((element) => {
        if (!revealed.has(element) && element.dataset.revealed !== 'true')
          observer.observe(element);
      });
    };
    const update = () => {
      stop();
      start();
    };
    start();
    motion.addEventListener('change', update);
    return () => {
      stop();
      motion.removeEventListener('change', update);
    };
  }, [pathname]);
  return null;
}
