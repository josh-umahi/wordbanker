import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    likesContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    likesButton: {
        color: "black",
        padding: "0 1em 0 1px",
        minHeight: 0,
        minWidth: 0,
        "&.MuiButtonBase-root": {
            backgroundColor: 'transparent',
        }
    },
    likesLabel: {
        fontStyle: "normal !important"
    }
}));