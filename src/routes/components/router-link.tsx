import { forwardRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

interface RouterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  target?: string;
  className?: string;
  children: ReactNode;
}

export type Ref = HTMLAnchorElement;

// ----------------------------------------------------------------------

const RouterLink = forwardRef<Ref, RouterLinkProps>((props, ref) => (
  <Link ref={ref} to={props.href} target={props.target} className={props.className}>
    {props.children}
  </Link>
));

export default RouterLink;
