import classes from "./NavigationBar.module.css";
import Button from "./Button";
const NavigationBar = ({ getMove }) => {
  const getAvatarHandler = (event) => {
    event.preventDefault();
    getMove("AVATAR");
  };

  const getChickenDanceHandler = (event) => {
    event.preventDefault();
    getMove("CHICKEN");
  };
  const getSillyDanceHandler = (event) => {
    event.preventDefault();
    getMove("SILLY");
  };

  return (
    <div className={classes.bar}>
      <Button
        imageSrc={"img/avatar.png"}
        description={"Avatar"}
        onClick={getAvatarHandler}
      />
      <Button
        imageSrc={"img/chicken.png"}
        description={"Chicken Dance"}
        onClick={getChickenDanceHandler}
      />
      <Button
        imageSrc={"img/avatar.png"}
        description={"Silly Dance"}
        onClick={getSillyDanceHandler}
      />
    </div>
  );
};

export default NavigationBar;
