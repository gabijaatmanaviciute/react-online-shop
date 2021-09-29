import { makeStyles } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className={classes.footer}>
      <p>All &copy; copy rights reserved {fullYear}</p>
    </footer>
  );
};

const useStyles = makeStyles({
  footer: {
    width: "100%",
    marginTop: "2rem",
    padding: "10px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
  },
});

export default Footer;
