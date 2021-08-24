import { useState } from "react";
import MeetupList from "../Components/meetups/MeetupsList";


function AllMeetup() {

  const [isLoading, setIsLoading] = useState(true);
  /*Anular una vez que tengamos los datos del backend */
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  fetch('https://react-getting-started-a2645-default-rtdb.firebaseio.com/meetups.json'
  )
  .then((response) => {
    return response.json();
  })
  /*Obtenemos los datos reales*/
  .then((data) => {
    setIsLoading(false);
    setIsLoading(data);
  });

  if(isLoading){
    return(
      <section>
        <p>Loading...</p>
      </section> 
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetup;