import {Fragment} from "react";
import ProductItem from "./ProductItem";
import { Grid, Container } from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import Spinner from "../UI/Spinner";
import Banner from "./Banner";

const useStyles = makeStyles({
  products: {
    paddingTop: "120px",
    paddingBottom: "30px"
  }
});

const Products = ({ products }) => {
  const classes = useStyles();
  if (!products.length) return <Spinner />;
  
  return (
    <Fragment>
      <Banner />
      <Container className={classes.products} id="products">
        <Grid container spacing={4}>
          {products.map((product) => {
            console.log(product);
            return (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <ProductItem product={product} />
            </Grid>
            )
          }
          )}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Products;