import { useState, useEffect } from "react";
import MeetupList from "../Components/meetups/MeetupsList";

function AllMeetup() {
  const [isLoading, setIsLoading] = useState(true);
  /*Anular una vez que tengamos los datos del backend */
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-a2645-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
      
        return response.json();
        
        /*Obtenemos los datos reales*/
      })
      .then((data) => {
       
        /*Transformar los datos*/
        const meetups = [];
   
        for (const key in data) {
     
          const meetup = {
            id: key,
            ...data[key],
            
          };
        
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
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

export default AllMeetup;
