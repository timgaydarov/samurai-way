import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

export default function Profile() {
  return (
    <div className={classes.content}>
      <div>img</div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
}
