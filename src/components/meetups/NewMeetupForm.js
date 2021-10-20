import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const inputAddressRef = useRef();
  const inputDiscRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImg = imageInputRef.current.value;
    const enteredAddr = inputAddressRef.current.value;
    const enteredDisc = inputDiscRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImg,
      address: enteredAddr,
      disc: enteredDisc,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="img">Meetup Image</label>
          <input type="url" required id="img" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={inputAddressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="disc">Meetup Description</label>
          <textarea
            type="text"
            required
            id="disc"
            rows="5"
            ref={inputDiscRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
