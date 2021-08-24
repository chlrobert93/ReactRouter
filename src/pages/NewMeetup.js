import NewMeetupForm from "../Components/meetups/NewMeetupForm";

function NewMeetup () {

     function addMeeetupHandler (){

     };

    return (
        <section>
            <h1>Add New Meetup</h1>
          <NewMeetupForm  onAddMeetup={addMeeetupHandler} />   
        </section>
    );

}

export default NewMeetup;