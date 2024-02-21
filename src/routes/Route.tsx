import React, { useContext, useEffect, useState } from 'react';
import { LocationContext } from '@routes/Router';

interface RouteProps {
  path: string;
  component: any;
  state?: any;
}

const Route = ({ path, component, state }: RouteProps) => {
  const { pathname } = window.location;
  const [isPath, setIsPath] = useState(false);
  const { setLocation } = useContext(LocationContext);

  const route = (pathname: string) => {
    if (path === pathname) {
      setIsPath(true);
    } else {
      setIsPath(false);
    }

    window.onpopstate = () => {
      setLocation({ pathName: pathname });
    };
  };

  useEffect(() => {
    route(pathname);
  }, [pathname]);

  return isPath ? component : null;
};

export default Route;
