import { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { ListItemAvatar } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Divider } from "@material-ui/core";

const CartItem = ({ product, updateProduct, removeItemFromCart }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <ListItem className={classes.cartItem}>
        <ListItemAvatar>
          <Avatar
            className={classes.image}
            alt="Cart item"
            src={product.media.source}
          />
        </ListItemAvatar>
        <ListItemText
          primary={product.name}
          secondary={product.price.formatted_with_symbol}
        >
          <Typography></Typography>
        </ListItemText>
          {/* <Typography className={classes.amount}>{product.line_total}</Typography> */}
        <IconButton aria-label="delete" size="medium">
          <Delete fontSize="inherit" onClick={() => {removeItemFromCart(product.id)}} />
        </IconButton>
        <div className={classes.actions}>
          <Button
            variant="outlined"
            onClick={() => {
              updateProduct(product.id, product.quantity - 1);
            }}
          >
            −
          </Button>
          <Container className={classes.itemQuantity}>{product.quantity}</Container>
          <Button
            variant="outlined"
            onClick={() => {
              updateProduct(product.id, product.quantity + 1);
            }}
          >
            +
          </Button>
        </div>
      </ListItem>
      <Divider />
    </Fragment>
  );
};

const useStyles = makeStyles({
  cartItem: {
    padding: "5px 0",
  },
  image: {
    width: "85px",
    height: "85px",
    padding: "0.5rem",
    borderRadius: "0",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    '& button': {
      padding: 0,
      minWidth: "2rem",
      width: "2rem",
      height: "2rem",
    }
  },
  itemQuantity: {
    padding: "1rem",
    textAlign: "center",
    minWidth: "1rem",
  }
});

export default CartItem;
