import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile() {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}
