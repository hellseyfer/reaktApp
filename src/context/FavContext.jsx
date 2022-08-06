import { createContext, useEffect, useState } from 'react';

export const FavContext = createContext();

export const FavContextProvider = ({ children }) => {
  const [fav, setFav] = useState(() => {
    const localData = localStorage.getItem('fav');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(fav));
  }, [fav]);

  const addToFav = (p) => {
    var exists = fav.some((item) => item.id === p.id);

    if (!exists) {
      setFav((fav) => [...fav, p]);
    } else {
      setFav((fav) => fav.filter((item) => item.id !== p.id));
    }
  };

  return (
    <FavContext.Provider value={{ fav, addToFav }}>
      {children}
    </FavContext.Provider>
  );
};
