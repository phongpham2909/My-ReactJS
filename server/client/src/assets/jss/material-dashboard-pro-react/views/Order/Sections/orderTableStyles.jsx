import { primaryColor, dangerColor, warningColor, successColor, infoColor } from "../../../../material-dashboard-pro-react";
const styles = {
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
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse",
        overflow: "auto",
        "& > tbody > tr, & > thead > tr": {
            height: "auto"
        }
    },
    root: {
        width: "100%",
        marginTop: "-20px"
    },
    mr1: {
        marginLeft: "-25px"
    },
}

export default styles;