import classes from "./Post.module.css";

type PostPropsType = {
  message: string;
  likesCount: number;
};

export default function Post(props: PostPropsType) {
  return (
    <div className={classes.post}>
      <img
        className={classes.img}
        alt="#"
        src="https://www.pngall.com/wp-content/uploads/4/Samurai-Logo-PNG.png"
      />
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
}
