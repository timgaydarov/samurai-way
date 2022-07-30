import classes from "./Post.module.css";

type PostPropsType = {
  message: string;
  likesCount: number;
};

export default function Post(props: PostPropsType) {
  return (
    <div className={classes.post}>
      <div className={classes.postMassage}>
        <img
          className={classes.img}
          alt="#"
          src="https://www.pngall.com/wp-content/uploads/4/Samurai-Logo-PNG.png"
        />
        {props.message}
      </div>
      <div className={classes.like}>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
}
