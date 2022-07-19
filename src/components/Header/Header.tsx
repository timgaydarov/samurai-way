import classes from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header className={classes.header}>
        <img
          className={classes.logo}
          src="https://it-incubator.by/images/tild3364-3137-4332-a334-393434383366__logo-big-blue.png"
        />
      </header>
    </div>
  );
}
