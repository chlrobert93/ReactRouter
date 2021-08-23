import MeetupList from "../Components/meetups/MeetupsList";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'Rick',
      image:
        'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/06/21/16242856773142.jpg',
     
    },
    {
      id: 'm2',
      title: 'Morty',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
     
    },
  ];





function AllMeetup() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetup;