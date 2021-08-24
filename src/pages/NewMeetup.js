import NewMeetupForm from "../Components/meetups/NewMeetupForm";

function NewMeetup () {

     function addMeeetupHandler (meetupData){
           //console.log(meetupData);
           fetch('https://react-getting-started-a2645-default-rtdb.firebaseio.com/meetups.json',
           {
               method: 'POST',
               body: JSON.stringify(meetupData),
               Headers:{
                   'Content-Type':'application/json'
               }
           }
        );
     };

    return (
        <section>
            <h1>Add New Meetup</h1>
          <NewMeetupForm  onAddMeetup={addMeeetupHandler} />   
        </section>
    );

}

export default NewMeetup;