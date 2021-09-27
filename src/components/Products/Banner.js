import banner from "../../assets/food-image-header.jpg";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  banner: {
    paddingTop: "100px",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  bannerContent: {
    alignItems: "center",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    "& img": {
      width: "100%",
    },
  },
  title: {
    fontSize: "45px",
    marginBottom: "20px",
    fontFamily: "Roboto",
  },
  "@media (min-width: 800px)": {
    title: {
      fontSize: "65px",
    }
  }
});

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container>
        <Grid className={classes.bannerContent} container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.title} variant="h1">
              Welcome to Feed.me!
            </Typography>
            <Button color="primary" href="#products">
              Shop Organic Products
            </Button>
          </Grid>
          <Grid className={classes.brand} item sm={6}>
            <img src={banner} alt="Healthy food products" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
