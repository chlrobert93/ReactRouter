import { useRef } from "react";
import CardForm from "../ui/CardForm";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function onFrormSubmit(event) {
    event.preventDefault();

    const enteredTtitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTtitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <CardForm>
      <form className={classes.form} onSubmit={onFrormSubmit}>
        <div>
          <label htmlFor="title" className={classes.labetTetxt}>
            Name
          </label>
          <input
            type="text"
            className={classes.inputForm}
            required
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div>
          <label htmlFor="image" className={classes.labetTetxt}>Image</label>
          <input
            type="url"
            className={classes.inputForm}
            required
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div>
          <label htmlFor="addres" className={classes.labetTetxt}>Address</label>
          <input
            type="text"
            className={classes.inputForm}
            required
            id="addres"
            ref={addressInputRef}
          />
        </div>
        <div>
          <label htmlFor="description" className={classes.labetTetxt}>Description</label>
          <textarea
            id="description"
            className={classes.inputForm}
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add card</button>
        </div>
      </form>
    </CardForm>
  );
}

export default NewMeetupForm;
