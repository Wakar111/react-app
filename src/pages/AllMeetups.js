import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://meetup-pro-react-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allMeetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          allMeetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(allMeetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
