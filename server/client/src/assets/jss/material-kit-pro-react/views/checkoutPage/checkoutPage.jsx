import {
    container,
    title,
    cardTitle,
    main,
    mainRaised,
    mrAuto,
    mlAuto
} from "../../../material-kit-pro-react";

const checkoutPage = {
    main,
    mainRaised,
    mrAuto,
    mlAuto,
    cardTitle,
    container: {
        ...container,
        zIndex: 1
    },
    title: {
        ...title,
        "&, & + h4": {
            color: "#fff"
        }
    },
    textCenter: {
        textAlign: "center"
    },
    textRight: {
        textAlign: "right"
    },
    textLeft: {
        textAlign: "left"
    },
    labelHorizontal: {
        display: "inline-flex",
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        paddingTop: "40px",
        marginRight: "0"
    },
    customBackground: {
        backgroundColor: "#f7f7f7"
    },
    customMrg: {
        marginTop: "50px !important"
    },
    imgContainer: {
        width: "100px",
        maxHeight: "160px",
        overflow: "hidden",
        display: "block",
        "& img": {
            width: "100%"
        }
    },
    customName: {
        marginTop: "15px",
        fontWeight: "400"
    }

}

export default checkoutPage;