'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollReveal() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    const elements = [
      ...document.querySelectorAll<HTMLElement>('main [data-reveal]'),
    ];
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const show = (element: HTMLElement) => {
      element.dataset.revealState = 'visible';
      element.style.removeProperty('will-change');
    };
    if (!('IntersectionObserver' in window) || !Element.prototype.animate) {
      elements.forEach(show);
      return;
    }
    let disposed = false;
    const frames = new Set<number>();
    const timers = new Set<number>();
    const animations = new Map<HTMLElement, Animation>();
    const nextFrame = (callback: () => void) => {
      const id = requestAnimationFrame(() => {
        frames.delete(id);
        if (!disposed) callback();
      });
      frames.add(id);
    };
    const reveal = async (element: HTMLElement, index: number) => {
      if (element.dataset.revealState) return;
      element.dataset.revealState = 'preparing';
      if (motion.matches) {
        show(element);
        return;
      }
      const images = [...element.querySelectorAll('img')];
      if (images.length) {
        let timeout: number | undefined;
        await Promise.race([
          Promise.all(images.map((image) => image.decode().catch(() => {}))),
          new Promise<void>((resolve) => {
            timeout = window.setTimeout(() => {
              timers.delete(timeout!);
              resolve();
            }, 1200);
            timers.add(timeout);
          }),
        ]);
        if (timeout !== undefined) {
          clearTimeout(timeout);
          timers.delete(timeout);
        }
      }
      if (disposed || element.dataset.revealState === 'visible') return;
      if (motion.matches) {
        show(element);
        return;
      }
      element.style.willChange = 'transform, opacity';
      // Commit the server-rendered starting state before playing it, in Safari
      // as well as Chromium. Do not restart an entrance after it has begun.
      nextFrame(() =>
        nextFrame(() => {
          if (motion.matches) {
            show(element);
            return;
          }
          element.dataset.revealState = 'animating';
          const animation = element.animate(
            [
              {
                opacity: 0,
                transform: 'translate3d(-24px, 76px, 0) scale(.97)',
              },
              { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
            ],
            {
              duration: 760,
              delay: Math.min(index * 75, 225),
              easing: 'cubic-bezier(.2, .8, .2, 1)',
              fill: 'both',
            },
          );
          animations.set(element, animation);
          animation.onfinish = () => {
            show(element);
            animations.delete(element);
            animation.cancel();
          };
        }),
      );
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          void reveal(entry.target as HTMLElement, index);
        });
      },
      { threshold: 0.08 },
    );
    const reduce = () => {
      if (!motion.matches) return;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      elements.forEach(show);
    };
    if (motion.matches) elements.forEach(show);
    else
      elements.forEach((element) => {
        if (!element.dataset.revealState) observer.observe(element);
      });
    motion.addEventListener('change', reduce);
    return () => {
      disposed = true;
      observer.disconnect();
      frames.forEach(cancelAnimationFrame);
      timers.forEach(clearTimeout);
      animations.forEach((animation) => animation.cancel());
      elements.forEach(show);
      motion.removeEventListener('change', reduce);
    };
  }, [pathname]);
  return null;
}
