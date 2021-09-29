import CartItem from "./CartItem";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
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
    <Container className={classes.cartPage}>
      <Grid item xs={12} sm={8} md={5}>
        <Card className={classes.cartPanel}>
          <Container className={classes.itemListField}>
            {cartData.line_items.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                updateProduct={updateProduct}
                removeItemFromCart={removeItemFromCart}
              />
            ))}
          </Container>
          <div className={classes.total}>
            <Typography>Total Amount: </Typography>
            <Typography className={classes.totalCost} color="primary">
              {totalCost}
            </Typography>
          </div>
          <CardActions className={classes.actions}>
            <div>
              <Button
                variant="outlined"
                component={Link}
                to="/"
                startIcon={<KeyboardArrowLeft />}
              >
                Back
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleEmptyCart}
              >
                Empty Cart
              </Button>
            </div>
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
      </Grid>
    </Container>
  );
};
const useStyles = makeStyles({
  cartPage: {
    display: "flex",
    justifyContent: "center",
    marginTop: "6rem",
  },
  cartPanel: {
    padding: "1rem 2rem",

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
  itemListField: {
    padding: 0,
    maxHeight: "20rem",
    overflow: "auto",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
    '& button': {
      margin: "0 0.5rem"
    }
  },
  total: {
    marginTop: "1rem",
    textAlign: "right",
  },
  totalCost: {
    fontSize: "1.5rem",
  },
});

export default Cart;
