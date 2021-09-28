import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({});

const Cart = () => {
  const classes = useStyles();

  return (
    <Modal>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>*totalAmount*</span>
      </div>
      <div className={classes.actions}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
