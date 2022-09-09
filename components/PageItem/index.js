import classes from "./index.module.css";

export default function PageItem({ ids, data }) {
  return (
    data && (
      <div className={classes.wrapper}>
        <img 
          src={data.translateImage.url}
          alt={ids}
          className={classes.image}
        />
      </div>
    )
  );
};