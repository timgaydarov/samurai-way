import classes from "./Post.module.css";

type MessageType = {
  message: string;
  likesCount: number;
};

export default function Post(props: MessageType) {
  return (
    <div className={classes.post}>
      <img
        className={classes.img}
        src="https://www.pngall.com/wp-content/uploads/4/Samurai-Logo-PNG.png"
      />
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>

    </div>
  );
}
