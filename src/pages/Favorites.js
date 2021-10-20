import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);

  let content;

  if (favoritesContext.totalFavorites === 0) {
    content = <h2> You got no Favorite Meetup yet. </h2>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }

  return (
    <section>
      <h1>Favorite Page</h1>
      {content}
    </section>
  );
}
export default FavoritesPage;
