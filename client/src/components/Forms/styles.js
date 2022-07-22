import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    dialogWrapperRoot: {
        overflowY: "scroll",
    },
    dialogWrapper: {
        padding: theme.spacing(2),
        position: "absolute",
        top: theme.spacing(5),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
        '& .MuiInputLabel-root': {
            color: 'grey',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInputDiv: {
        display: "flex",
        alignItems: 'center',
        width: "100%"
    },
    fileInput: {
        margin: '10px 6px 10px 0',
    },
    buttonSubmit: {
        margin: "10px 0",
        backgroundColor: "black",
        color: "white",
        '&:hover': {
            backgroundColor: "black",
            color: "white",
        },
    },
    errorText: {
        textAlign: "left",
        color: "#FF114A",
    }
}));