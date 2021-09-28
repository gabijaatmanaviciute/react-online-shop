import { Fragment } from "react";
import ProductItem from "./ProductItem";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Spinner from "../UI/Spinner";
import Banner from "./Banner";

const Products = ({ products, addProduct }) => {
  const classes = useStyles();
  if (!products.length) return <Spinner />;

  return (
    <Fragment>
      <Banner />
      <Container className={classes.products} id="products">
        <Grid container spacing={6}>
          {products.map((product) => {
            console.log(product);
            return (
              <Grid key={product.id} item xs={12} sm={6} md={3}>
                <ProductItem product={product} addProduct={addProduct} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Fragment>
  );
};

const useStyles = makeStyles({
  products: {
    paddingTop: "6rem",
    paddingBottom: "2rem",
  },
});

export default Products;
