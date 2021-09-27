import { useContext } from "react";
import ProductItemForm from "./ProdutItemForm";
import CartContext from "../../store/cart-context";
import { Card } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  customCard: {
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 0px 10px 5px #555",
    },
  },
  content: {
    paddingBottom: 0,
  },
  title: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  image: {
    padding: "10px 10px 0 10px",
  },
});

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const classes = useStyles();

  const price = `${props.product.price.raw} EUR`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <Card className={classes.customCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          className={classes.image}
          image={props.product.media.source}
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {props.product.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography
            className={classes.basketItemPrice}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {props.product.price.formatted_with_symbol}
          </Typography>
        </CardActions>
      </CardActionArea>
      <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
    </Card>
  );
};

export default ProductItem;
