import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    navRight: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        '@media (max-width: 850px)': {
            display: 'none'
        }
    },
    menuIconButtonDiv: {
        display: "block",
        color: "black",
        '@media (min-width: 850px)': {
            display: 'none'
        }
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    logo: {
        height: "40px",
    },
    username: {
        fontSize: "18px",
        letterSpacing: 0.5,
        fontWeight: 400,
        color: "black",
    },
    button1: {
        fontWeight: 500,
        paddingLeft: "2em",
        paddingRight: "2em",
        textTransform: "uppercase",
        backgroundColor: "black",
        color: "white",
        '&:hover': {
            backgroundColor: "black",
            color: "white",
        },
    },
    button2: {
        fontWeight: 500,
        paddingLeft: "2em",
        paddingRight: "2em",
        textTransform: "uppercase",
        backgroundColor: "#E7E7E8",
        color: "black",
        '&:hover': {
            backgroundColor: "#E7E7E8",
            color: "black",
        },
    },
}));
