import Link from 'next/link';
import type { ComponentProps } from 'react';

type Props = Omit<ComponentProps<'a'>, 'href'> & { href: string };

export function PortfolioLink(props: Props) {
  // Vinext's static export omits the client router runtime. Keep native links
  // in that artifact; the local prototype uses persistent client navigation.
  // Both paths share the same hydration-controlled, once-per-element entrance.
  if (process.env.NODE_ENV === 'development') return <Link {...props} />;
  return <a {...props} />;
}
