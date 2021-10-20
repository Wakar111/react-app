import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorit: (meetupId) => {},  
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorite, setUserFavorite] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorite((prevFavoriteMeetup) => {
      return prevFavoriteMeetup.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorite((prevFavoriteMeetup) => {
      return prevFavoriteMeetup.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorite.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorite,
    totalFavorites: userFavorite.length,
    addFavorite: addFavoriteHandler,
    removeFavorit: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
