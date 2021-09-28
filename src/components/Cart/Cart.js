import CartItem from "./CartItem";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { KeyboardArrowLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Cart = ({
  cartData,
  updateProduct,
  removeItemFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const totalCost = cartData.subtotal
    ? cartData.subtotal.formatted_with_symbol
    : "00.00";

  return (
    <div className={classes.cartPage}>
      <Card className={classes.cartPanel}>
        {cartData.line_items.map((item) => (
          <CartItem
            key={item.id}
            product={item}
            updateProduct={updateProduct}
            removeItemFromCart={removeItemFromCart}
          />
        ))}
        <div className={classes.total}>
          <Typography>Total Amount: </Typography>
          <Typography className={classes.totalCost} color="primary">
            {totalCost}
          </Typography>
        </div>
        <CardActions className={classes.actions}>
          <Button
            variant="outlined"
            component={Link}
            to="/"
            startIcon={<KeyboardArrowLeft />}
          >
            Back
          </Button>
          <Button variant="outlined" color="primary" onClick={handleEmptyCart}>
            Empty Cart
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.checkoutBtn}
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
const useStyles = makeStyles({
  cartPage: {
    display: "flex",
    justifyContent: "center",
    marginTop: "6rem",
  },
  cartPanel: {
    padding: "2.5rem",
    animation: "$banner-appears 1s ease-out forwards",
  },
  "@keyframes banner-appears": {
    from: {
      opacity: 0,
      transform: "translateY(3rem)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  actions: {
    marginTop: "1rem",
  },
  total: {
    textAlign: "right",
  },
  totalCost: {
    fontSize: "1.5rem",
  },
});

export default Cart;
