import { createContext } from "react";

const FavoritesContext = createContext({
  /*Valor inicial*/
  favorites: [],
  totalFavorites: 0,
  addFavorite:(favoriteMeetup) =>{},
  removeFavorite:(meetupId) => {},
  itemIsFavorite:(meetupId) => {},
});

//Sera el responsable de actualizar los valores de contexto
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.concat(favoriteMeetup)
    );
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  }

  //Ayuda si un articulo es favorito o no
  function itemIsFavoriteHandler(meetupId) {
    userFavorites.some((meetup) => meetup.id === meetupId);
  }

  //Cunado el estado cambie, este valor cambiará y tendrá un nuevo objecto de contexto actualizado
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;