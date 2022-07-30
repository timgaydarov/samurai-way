import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <div>
          <button className={classes.add}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <Post message="hi, how are you?" likesCount={0} />
      <Post message="yo" likesCount={23} />
      <Post message="Hello world!" likesCount={7} />
    </div>
  );
}
