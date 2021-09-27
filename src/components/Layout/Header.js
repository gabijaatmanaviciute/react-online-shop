import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import { Container } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import classes from "./Header.module.css";

const useStyles = makeStyles({
  appbar: {
    width: '100%'
  },
});

const Header = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appbar}>
        <Container>
          <Toolbar>
            <Typography>Feed.me</Typography>
            <HeaderCartButton onClick={props.onShowCart} />
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default Header;
