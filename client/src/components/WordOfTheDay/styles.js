import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    wotdContainer: {
        backgroundColor: "#e7e7e8",
        '@media (max-width: 740px)': {
            backgroundColor: "white",
        },

        '& h2': {
            color: "black",
            fontWeight: "normal",
            letterSpacing: "0.1em"
        },
        '& h2:first-child': {
            '@media (max-width: 740px)': {
                display: 'none'
            }
        },
    },
    largeDevicesContainer: {
        display: "flex",
        justifyContent: "center",
        padding: "1em 0 1.4em",

        '@media (max-width: 740px)': {
            display: 'none'
        }
    },
    largeDevicesInnerContainer: {
        display: "flex",
        justifyContent: "center",
        padding: "0.3em 0",
        backgroundColor: "white",
    },
    largeDevicesInnerContainer2: {
        height: "29em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "38.5em",
        backgroundColor: "white",

        '@media (max-width: 950px)': {
            height: "18.8em",
            width: "30em"
        }
    },
    largeDevicesInnerContainer3: {
        margin: "1.5em",
        overflowX: "hidden",
        overflowY: "scroll",
    },
    largeDevicesDescription: {
        overflowX: "hidden",
        overflowY: "scroll",
        borderRight: "0.15em solid #e7e7e8",
    },
    largeDevicesOtherInfo: {
        borderRight: "0.15em solid #e7e7e8",
        maxHeight: "16.5em",
        paddingRight: "1em",
        paddingBottom: "2.5em",
        // text-align: left;

        // '& h1': {
        //     font-weight: 500;
        //     font-size: 3rem;
        //     line-height: 130%;
        //     color: #0071F0;
        // },
        // '& h2': {
        //     font-weight: 400;
        //     font-size: 1.2rem;
        //     letter-spacing: var(--zeroPixels);
        //     color: #0071F0;
        // },
        // '& h3': {
        //     color: var(--blackColor);
        //     font-size: 1.35rem;
        // },
        // '& h4': {
        //     color: var(--blackColor);
        // },
    },
    largeDevicesImage: {

    },
    smallDevicesContainer: {

    },
    smallDevicesHeading: {

    },
    smallDevicesImage: {

    },
    smallDevicesInnerContainer: {

    },
    smallDevicesDescription: {

    },
    thinLine: {

    },
    smallDevicesOtherInfo: {

    },
}));