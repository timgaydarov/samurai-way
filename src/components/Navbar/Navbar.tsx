import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <div>
        <a>Profile</a>
      </div>
      <div>
        <a>Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Setting</a>
      </div>
    </nav>
  );
}
