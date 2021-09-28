import { Card } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Typography } from "@material-ui/core";
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

const ProductItem = ({
  cart,
  product,
  addProduct,
  updateProduct,
  RemoveItemFromCart,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.customCard}>
      <CardActionArea>
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
        </CardContent>
      </CardActionArea>
      {cart && (
        <CardActions>
          <Typography
            className="cart-item-price"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {product.price.formatted_with_symbol}
          </Typography>
        </CardActions>
      )}
      <CardActions className="actions-content">
        {!cart && (
          <>
            <Typography
              className="price"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {product.price.formatted_with_symbol}
            </Typography>
            <Button
              size="large"
              className="custom-button"
              onClick={() => {
                addProduct(product.id, 1);
              }}
            >
              <ShoppingCart /> Add to cart
            </Button>
          </>
        )}
        {cart && (
          <>
            <Button
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => {
                RemoveItemFromCart(product.id);
              }}
            >
              Remove
            </Button>
            <>
              <Button
                size="small"
                variant="outlined"
                className="increase-product-quantity"
                onClick={() => {
                  updateProduct(product.id, product.quantity + 1);
                }}
              >
                +
              </Button>
              <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => {
                  updateProduct(product.id, product.quantity - 1);
                }}
              >
                -
              </Button>
            </>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductItem;
