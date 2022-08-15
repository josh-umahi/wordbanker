import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    container: {
        margin: "150px 2em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        textAlign: "center"
    },
    firstText: {
        fontFamily: "'Avenir', 'Nunito', 'sans-serif'",
        fontSize: "100px",
        fontWeight: "600",
        background: "-webkit-linear-gradient(#000, #0071f0)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
    },
    middleText: {
        fontFamily: "'Avenir', 'Nunito', 'sans-serif'",
        fontSize: "23px",
        fontWeight: "600",
        textTransform: "uppercase"
    },
    lastText: {
        fontSize: "18px",
        margin: "0.5em 0 1em"
    },
    button: {
        textTransform: "uppercase",
        backgroundColor: "#000",
        padding: "0.5em 1.5em",
        color: "white",
        borderRadius: "50px",
        boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",

        '&:hover': {
            backgroundColor: "#000",
            color: "white",
            boxShadow: "none"
        },
    },
}));