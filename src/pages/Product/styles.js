import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "64px",
    height: "calc(100vh - 64px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  productContainer: {
    flexGrow: 1,
    display: "flex",
    height: "100%",
    width: "100%"
  },
  imgContainer:{
    width: "50%",
    height: "85%",
    display: "flex",
    paddingTop: "2rem",
    justifyContent: "center"
  },
  img:{
    width: "73%",
    height: "100%"
  },
  detailContainer: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    gap: "30px"
  },
  pd: {
    paddingRight: theme.spacing(2)
  },
  space: {
    height: "16px",
    width: "100%"
  },
  price: {
    color: "#ff6333",
  },
  btn: {
    backgroundColor: "#ff9100",
    width: "23%",
    '&:hover': {
      backgroundColor: "#ffa733"
    }
  }
}));
