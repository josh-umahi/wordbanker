import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    container: {
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2em",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,

        "& p": {
            color: "white",
            fontFamily: "'Avenir', 'Nunito', 'sans-serif'",
            fontSize: "14px"
        }
    },
    innerContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: "1em"
    },
    logo: {
        height: "40px",
    },
    divider: {
        height: "27px",
        borderLeft: "1px solid white",
        display: "flex",
        margin: "0 1em",
    },
}));
