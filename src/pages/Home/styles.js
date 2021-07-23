import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    marginTop: "64px",
    height: "calc(100vh - 64px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  gc:{
      flexGrow: 1
  }
});
