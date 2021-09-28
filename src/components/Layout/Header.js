import HeaderCartButton from "./HeaderCartButton";
import { Container } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  const classes = useStyles();
  
  return (
    <AppBar position="fixed" className={classes.appbar}>
        <Container>
          <Toolbar>
            <Typography to="/" component={Link} variant="h5" className={classes.title}>
              Feed.me
            </Typography>
            <HeaderCartButton cartItems={cartItems} to="/basket" />
          </Toolbar>
        </Container>
      </AppBar>
  );
};

const useStyles = makeStyles({
  appbar: {
    width: "100%",
  },
  title: {
    textDecoration: "none",
    color: "#fff",
  }
});

export default Header;
