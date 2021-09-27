import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    marginBottom: "1rem",
  },
  quantBtn: {
    minWidth: "2rem",
    padding: "0.3rem 0.8rem",
  },
});

const Input = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      <ButtonGroup variant="outlined" color="primary">
        <Button  className={classes.quantBtn}>
          -
        </Button>
        <Button className={classes.quantBtn}>
          +
        </Button>
      </ButtonGroup>
    </div>
  );
});

export default Input;
