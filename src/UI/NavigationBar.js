import { useState } from "react";
import classes from "./NavigationBar.module.css";
import Button from "./Button";
const NavigationBar = ({ getMove }) => {
  const [name, setName] = useState("Play With Me!");

  const getAvatarHandler = (event) => {
    event.preventDefault();
    setName("Play With Me!");
    getMove("AVATAR");
  };

  const getChickenDanceHandler = (event) => {
    event.preventDefault();
    setName("Chicken Dance!");
    getMove("CHICKEN");
  };
  const getSillyDanceHandler = (event) => {
    event.preventDefault();
    setName("Silly Dance!");
    getMove("SILLY");
  };

  return (
    <div className={classes.bar}>
      <h1 className={classes.title}>{name}</h1>
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
        imageSrc={"img/silly.png"}
        description={"Silly Dance"}
        onClick={getSillyDanceHandler}
      />
    </div>
  );
};

export default NavigationBar;
