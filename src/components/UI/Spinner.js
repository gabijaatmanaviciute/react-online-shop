import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const Spinner = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );
};

const useStyles = makeStyles({
  spinner: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Spinner;
