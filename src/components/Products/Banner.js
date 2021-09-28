import banner from "../../assets/food-image-header.jpg";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

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
            <Button
              className={classes.bump}
              variant="outlined"
              color="primary"
              href="#products"
              endIcon={<KeyboardArrowRight />}
            >
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

const useStyles = makeStyles({
  banner: {
    paddingTop: "2rem",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    animation: "$banner-appears 1s ease-out forwards",
  },
  "@keyframes banner-appears": {
    from: {
      opacity: 0,
      transform: "translateY(3rem)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
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
  bump: {
    animation: "$bump 1500ms ease-out",
  },
  "@keyframes bump": {
    "0%": {
      transform: "scale(1)",
    },
    "70%": {
      transform: "scale(0.9)",
    },
    "80%": {
      transform: "scale(1.1)",
    },
    "90%": {
      transform: "scale(1.15)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
  "@media (min-width: 800px)": {
    title: {
      fontSize: "65px",
    },
  },
});

export default Banner;
