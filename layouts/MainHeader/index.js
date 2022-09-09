import classes from "./index.module.css";
import { getAllData } from '../../mockup'; 

function MainHeader() {
  const { name, title } = getAllData();
  return (
    <header className={classes.header}>
      <span className={classes.title}>{title} / </span>
      <span className={classes.name}> {name} </span>
    </header>
  );
}

export default MainHeader;