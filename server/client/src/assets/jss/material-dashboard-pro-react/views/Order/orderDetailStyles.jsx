import {
  cardTitle,
  primaryColor,
  dangerColor,
  warningColor,
  successColor,
  infoColor,
  grayColor
} from '../../../material-dashboard-pro-react';
const styles = ({
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
  cardIconTitle: {
    ...cardTitle,
    color: "rgba(0, 0, 0, 0.54)",
    marginTop: "15px",
    marginBottom: "0px"
  },
  pageSubcategoriesTitle: {
    color: grayColor[1],
    textDecoration: "none",
    textAlign: "left",
    fontWeight: 400
  },
  cardCategory: {
    margin: "0",
    color: "#999999"
  },
  hoverIcon: {
    cursor: "pointer",
    color: "#3C4858"
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
  customPadding: {
    padding: "20px 0"
  },
  imgContainer: {
    width: "90px",
    maxHeight: "140px",
    overflow: "hidden",
    display: "block"
  },
  img: {
    width: "100%",
    height: "auto",
    verticalAlign: "middle",
    border: "0"
  },
  price: {
    fontSize: "14px",
    color: "#9a9a9a"
  },
  priceOld: {
    fontSize: "14px",
    textDecoration: "line-through"
  },
  priceNew: {
    color: "#f44336"
  },
  customUs: {
    marginTop: "20px",
    backgroundColor: primaryColor[3],
    color: "#fff",
    padding: "10px",
  }
})

export default styles;