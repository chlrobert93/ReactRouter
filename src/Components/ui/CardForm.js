import classes from './CardForm.module.css';


function CardForm(props) {
    //console.log(props.children);
    return (
        <div className={classes.cardForm}>{props.children}</div>
    );
}


export default CardForm;