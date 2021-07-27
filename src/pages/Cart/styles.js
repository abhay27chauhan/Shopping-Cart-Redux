import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#EDEDED",
        minHeight: "100vh",
        width: "100vw",
        paddingTop: "64px",
    },
    container:{
        height: "100%",
        display: "flex",
        paddingTop:"4rem", 
        paddingBottom: "2rem",
        justifyContent: "space-between"
    },
    cartItems: {
        width: "74%",
        minHeight: "4rem",
        display: "flex",
        flexDirection: "column"
    },
    heading: {
        paddingTop: "0.7rem",
        paddingLeft: "0.4rem",
        backgroundColor: "white",
        width: "100%",
        height: "64px",
        borderBottom: "1px solid"
    },
    itemList: {
        marginTop: theme.spacing(1),
        '& > div': {
            display: "flex",
            flexDirection: "column",
            gap: "12px"
        }
    }
}))