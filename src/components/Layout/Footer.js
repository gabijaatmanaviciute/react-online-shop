import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    padding: "10px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
  },
});

const Footer = () => {
  const classes = useStyles();

  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className={classes.footer}>
      <p>All &copy; copy rights are reserved {fullYear}</p>
    </footer>
  );
};

export default Footer;
