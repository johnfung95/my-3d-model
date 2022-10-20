import classes from "./Button.module.css";
const Button = ({ imageSrc, description, onClick }) => {
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
