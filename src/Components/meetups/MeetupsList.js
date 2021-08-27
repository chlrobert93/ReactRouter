import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';


import {List,Item} from '../meetups/styles';

function MeetupList(props) {

    
  return (
    
    <List className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </List>
    
  );
}

export default MeetupList;