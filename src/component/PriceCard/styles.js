import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "15px",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: "3px"
  },
  subtotal:{
    fontSize: 14,
    '& > span': {
      fontWeight: "bold"
    }
  },
  coupon: {
    display: "flex",
    alignItems: "flex-end",
    gap: "12px",
    padding: "12px"
  },
  input: {
    flexGrow: 1
  }
});