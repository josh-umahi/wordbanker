import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
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
    fileInput: {
        width: '97%',
        margin: '10px 0',
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
}));