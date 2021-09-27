import { useRef, useState } from "react";
import Input from "../UI/Input";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";


const useStyles = makeStyles({
  form: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  addToCartBtn: {
    width: "100%",
  }
});

const ProductItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const classes = useStyles();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount: "
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button type="submit" variant="contained" color="primary" className={classes.addToCartBtn}>Add to Cart</Button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default ProductItemForm;
