import { Link } from "react-router-dom";
import classes from "./mensajes.module.css";


function MensajeCard() {
  return (
    <div className={classes.card}>
      <p className={classes.mensaje}>You got no favorites yet. Start adding some?</p>
      <Link to="/"><a className={classes.btn}>All Card</a></Link>
    </div>
  );
}

export default MensajeCard;
