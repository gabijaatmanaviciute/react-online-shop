import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import { Container } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  appbar: {
    width: "100%",
  },
  title: {
    textDecoration: "none",
    color: "#fff",
  }
});

const Header = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appbar}>
        <Container>
          <Toolbar>
            <Typography to="/" component={Link} variant="h5" className={classes.title}>
              Feed.me
            </Typography>
            <HeaderCartButton onClick={props.onShowCart} />
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default Header;
