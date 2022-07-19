import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <Post message="hi, how are you?" likesCount={0} />
      <Post message="yo" likesCount={23} />
      <Post message="Hello world!" likesCount={7} />
    </div>
  );
}
