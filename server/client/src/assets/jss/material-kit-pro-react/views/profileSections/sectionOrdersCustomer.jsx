import { primaryColor, dangerColor, warningColor, successColor, infoColor } from "../../../material-kit-pro-react";
const sectionOrdersCustomer = (theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 2,
    },
    tdColorSuccess: {
        color: "#fff",
        backgroundColor: successColor[3]
    },
    tdColorWarning: {
        color: "#fff",
        backgroundColor: warningColor[3]
    },
    tdColorError: {
        color: "#fff",
        backgroundColor: dangerColor[3]
    },
    tdColorWaitingPayment: {
        color: "#fff",
        backgroundColor: infoColor[3]
    },
    tdColorShipped: {
        color: "#fff",
        backgroundColor: primaryColor[3]
    },
    tdColorCashOnDelivery: {
        color: "#fff",
        backgroundColor: infoColor[1]
    },
    customStatus: {
        height: "25px",
        borderRadius: "4px"
    },
    tableResponsive: {
        marginTop: "50px",
        minHeight: "0.1%",
        overflowX: "auto",
    },
    table: {
        marginBottom: "0",
        minwidth: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse",
        overflow: "auto",
        "& > tbody > tr, & > thead > tr": {
            height: "auto"
        }
    },
})

export default sectionOrdersCustomer;