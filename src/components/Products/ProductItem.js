import { Card } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";


const ProductItem = ({
  product,
  addProduct
}) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.customCard}>
      <CardActionArea>
        <CardMedia
          className={classes.image}
          component="img"
          image={product.media.source}
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.title}
            variant="h6"
            component="h2"
            gutterBottom
          >
            {product.name}
          </Typography>
          <Typography
            className={classes.itemPrice}
            gutterBottom
            variant="h6"
            component="h2"
          >
            {product.price.formatted_with_symbol}
          </Typography>
          <CardActions>
            <Button
              className={classes.addToCartBtn}
              color="primary"
              variant="contained"
              onClick={() => {
                addProduct(product.id, 1);
              }}
            >
              Add to cart
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

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
  addToCartBtn: {
    width: "100%",
    marginBottom: "1rem",

  }
});

export default ProductItem;
