import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%",
    height: "336px",
    gap: "10px"
  },
  details: {
    width: "75%"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "22px",
    width: "100%",
    height: "100%",
  },
  cover: {
    width: "24%",
    backgroundSize: "contain"
  },
  quantity: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    '& input': {
      height: "21px",
      width: "40px"
    }
  },
  btnContainer:{
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "40px"
  },
  btn: {
    backgroundColor: "#ff9100",
    width: "16%",
    color: "white",
    '&:hover': {
      backgroundColor: "#ffa733"
    }
  }
}));