import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        paddingTop: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    moreWordsDiv: {
        backgroundColor: "white",
        margin: "1.75em 0",
        width: "80%",
        borderTop: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    moreWordsTitle: {
        paddingTop: "1.25em",
        fontFamily: "'Times New Roman', serif",
        fontWeight: "bold",
        fontSize: "16px"
    },
    wordButtonsDiv: {
        width: "100%",
        padding: "2em 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    wordButton: {
        '&:hover': {
            textDecoration: "underline",
            textDecorationColor: "#8C8E90",
            cursor: "pointer",
        },
    },
    wordTypography: {
        color: "#8C8E90",
        fontFamily: "'Avenir', 'Nunito', 'sans-serif'",
        fontWeight: "400",
        fontSize: "18px"
    },
}));
