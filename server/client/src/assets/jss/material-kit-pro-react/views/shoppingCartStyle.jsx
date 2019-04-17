import {
  container,
  title,
  cardTitle,
  main,
  mainRaised,
  mrAuto,
  mlAuto
} from "../../material-kit-pro-react";

import buttonGroup from "../buttonGroupStyle";
import tooltips from "../tooltipsStyle";
import TableStyle from "../components/tableStyle";

const styles = {
  TableStyle,
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  cardTitle,
  ...buttonGroup,
  ...tooltips,
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
  tableCellAmount: {
  fontSize: "24px",
  fontWeight: "400",
  marginTop: "5px",
  textAlign: "right"
  },
  tableCellTotal: {
    fontWeight: "500",
    fontSize: "1.0625rem",
    paddingTop: "20px",
    textAlign: "right"
  },
  customBorderBottom: {
    borderBottom: "0px solid #000 !important",
    paddingTop: "30px",
    paddingBottom: "30px"
  },
  customBorderBottom1: {
    borderBottom: "0px solid #000 !important",
    paddingBottom: "30px"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
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
  description: {
    maxWidth: "150px"
  },
  tdName: {
    minWidth: "100px",
    fontWeight: "500",
    fontSize: "1.2em"
  },
  tdNameAnchor: {
    color: "#3C4858"
  },
  tdNameSmall: {
    color: "#999999",
    fontSize: "0.75em",
    fontWeight: "300"
  },
  tdNumber: {
    textAlign: "right",
    minWidth: "100px",
    fontWeight: "300",
    fontSize: "1.125em !important"
  },
  tdNumberSmall: {
    marginRight: "3px"
  },
  tdNumberAndButtonGroup: {
    lineHeight: "1 !important",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      marginRight: "0"
    }
  },
  customFont: {
    fontSize: "16px !important",
    fontWeight: "500",
  },
  actionButton: {
    margin: "0px",
    padding: "5px"
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
  textFloatLeft:{
    float: "right"
  },
  customPadding: {
    padding: "10px !important"
  },
  customPadding1: {
    padding: "40px",
    marginTop: "-20px"
  },
  paddingNone: {
    padding: "0px !important"
  },
  customBackground: {
    backgroundColor: "#f7f7f7"
  },
  customMrg: {
    marginTop: "50px !important"
  }
};

export default styles;
