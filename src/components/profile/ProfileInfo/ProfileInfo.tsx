import classes from "./ProfileInfo.module.css";

export default function ProfileInfo() {
  return (
    <div className={classes.content}>
      <div>
        <img
          className={classes.img}
          src="https://proprikol.ru/wp-content/uploads/2020/02/krasivye-kartinki-pro-zakaty-na-rabochij-stol-4-1.jpg"
        />
      </div>
      <div className={classes.avaAndDescription}>ava + description</div>
    </div>
  );
}
