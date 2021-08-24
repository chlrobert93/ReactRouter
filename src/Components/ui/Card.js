import classes from './Card.module.css';


function Card(props) {
    //console.log(props.children);
    return (
        <div className={classes.card}>{props.children}</div>
    );
}


export default Card;