import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogPropsTypes = {
  name: string;
  id: string;
};

const Dialog = (props: DialogPropsTypes) => {
  return (
    <div className={classes.user}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

type MessagePropsType = {
  message: string;
};

const Message = (props: MessagePropsType) => {
  return <div className={classes.massage}>{props.message}</div>;
};

export default function Dialogs() {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>
        <Dialog name="Lena" id="1" />
        <Dialog name="Masha" id="2" />
        <Dialog name="Katya" id="3" />
        <Dialog name="Leny" id="4" />
        <Dialog name="Yra" id="5" />
        <Dialog name="Artem" id="6" />
      </div>
      <div className={classes.massages}>
        <Message message="Hi" />
        <Message message="LoL" />
        <Message message="KeK" />
        <Message message="Yo" />
      </div>
    </div>
  );
}
