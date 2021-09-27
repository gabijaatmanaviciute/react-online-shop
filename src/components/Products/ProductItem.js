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
      transform: "scale(1.02)",
      boxShadow: "0px 0px 5px 5px #ddd",
    },
  },
  content: {
    paddingBottom: 0,
  },
  title: {
    marginLeft: "1rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  image: {
    padding: "2.8rem",
    height: "270px",
  },
  itemPrice: {
    marginLeft: "1rem",
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
      <CardMedia
        className={classes.image}
        component="img"
        image={props.product.media.source}
      />
      <CardContent className={classes.content}>
        <Typography
          className={classes.title}
          variant="h6"
          component="h2"
          gutterBottom
        >
          {props.product.name}
        </Typography>
        <Typography
          className={classes.itemPrice}
          gutterBottom
          variant="h6"
          component="h2"
        >
          {props.product.price.formatted_with_symbol}
        </Typography>
        <CardActions>
          <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
