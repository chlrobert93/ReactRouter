import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../Components/meetups/MeetupsList';
import MensajeCard from '../Components/mensajes/MensajeCard';

function Favorites(){
   const favoritesCtx = useContext( FavoritesContext);

   let content;
console.log(favoritesCtx.totalFavorites )
   if(favoritesCtx.totalFavorites === 0){
       content = <p><MensajeCard /></p>

    }else{
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }
    console.log(content);

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>
}

export default Favorites;