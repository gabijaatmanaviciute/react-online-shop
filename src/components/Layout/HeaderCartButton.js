import { useEffect, useState } from "react";
import { ShoppingCart } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  button: {
    cursor: "pointer",
    color: "white",
    padding: "0.75rem 1.5rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "25px",
  },
  basketWrapper: {
    flexGrow: 1,
    justifyContent: "flex-end",
    display: "flex",
  },
  customBasket: {
    fontSize: "1.8rem",
  },
  bump: {
    animation: "$bump 300ms ease-out",
  },
  "@keyframes bump": {
    "0%": {
      transform: "scale(1)",
    },
    "10%": {
      transform: "scale(0.9)",
    },
    "30%": {
      transform: "scale(1.1)",
    },
    "50%": {
      transform: "scale(1.15)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
});

const HeaderCartButton = ({cartItems}) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const classes = useStyles();

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartItems === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <div className={classes.basketWrapper}>
      <IconButton
        className={btnClasses}
        component={Link}
        to="/basket"
        aria-label="Show basket contents"
      >
        <Badge badgeContent={cartItems} color="secondary">
          <ShoppingCart className={classes.customBasket} />
        </Badge>
      </IconButton>
    </div>
  );
};

export default HeaderCartButton;
