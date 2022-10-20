import classes from "./Button.module.css";
const Button = ({ onClick, imageSrc, description }) => {
  return (
    <button className={classes.btn}>
      <img
        className={classes.avatar}
        src={imageSrc}
        alt={description}
        onClick={onClick}
      />
    </button>
  );
};

export default Button;
