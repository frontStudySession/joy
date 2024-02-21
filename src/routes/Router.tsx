import { createContext, useState } from 'react';

interface LocationContextProps {
  location: {
    pathName: string;
  };
  setLocation: React.Dispatch<React.SetStateAction<{ pathName: string }>>;
}

export const LocationContext = createContext<LocationContextProps>(null!);

interface RouterProps {
  children: React.ReactNode;
}

export const Router = ({ children }: RouterProps) => {
  const [location, setLocation] = useState({ pathName: '/' });

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
