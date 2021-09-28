import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const CartItem = ({ product, updateProduct, removeItemFromCart }) => {
  const classes = useStyles();

  return (
    <li className={classes.cartItem}>
      <div>
        <h2>{product.name}</h2>
        <div className={classes.itemSummary}>
          {/* <Typography className={classes.itemInfo}>{product.quantity}</Typography> */}
          {/* <Typography className={classes.amount}>{product.line_total}</Typography> */}
        </div>
      </div>
      <div className={classes.actions}>
        <button>−</button>
        <button>+</button>
      </div>
    </li>
  );
};

const useStyles = makeStyles({

});

export default CartItem;
