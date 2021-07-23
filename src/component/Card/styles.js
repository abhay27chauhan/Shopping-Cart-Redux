import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 310,
  },
  price: {
      textAlign: "center",
      margin: theme.spacing(2, 2, 0)
  }
}));