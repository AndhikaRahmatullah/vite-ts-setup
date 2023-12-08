import { useLocation, matchPath } from 'react-router-dom';

// ----------------------------------------------------------------------

interface UseActiveLinkProps {
  path?: string;
  deep?: boolean;
}

// ----------------------------------------------------------------------

export function useActiveLink(props: UseActiveLinkProps): boolean {
  const { pathname } = useLocation();
  const { path, deep = true } = props;

  const normalActive = path ? !!matchPath({ path, end: true }, pathname) : false;
  const deepActive = path ? !!matchPath({ path, end: false }, pathname) : false;

  return deep ? deepActive : normalActive;
}
