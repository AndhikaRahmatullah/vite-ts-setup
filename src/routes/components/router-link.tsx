import { forwardRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

interface RouterLinkProps {
  href: string;
  target?: string;
  children: ReactNode;
}

export type Ref = HTMLAnchorElement;

// ----------------------------------------------------------------------

const RouterLink = forwardRef<Ref, RouterLinkProps>((props, ref) => (
  <Link ref={ref} to={props.href} target={props.target}>
    {props.children}
  </Link>
));

export default RouterLink;
