import {
  section,
  container,
  cardTitle,
  coloredShadow,
  mlAuto,
  mrAuto,
  hexToRgb,
  grayColor,
  defaultFont,
} from "../../../material-kit-pro-react";

import customCheckboxRadioSwitch from "../../customCheckboxRadioSwitchStyle";

import tooltipsStyle from "../../tooltipsStyle";

const styles = {
  ...customCheckboxRadioSwitch,
  ...tooltipsStyle,
  coloredShadow,
  mlAuto,
  mrAuto,
  cardTitle: {
    ...cardTitle,
    textAlign: "center",
    marginBottom: "0px !important"
  },
  customFont: {
    fontSize: "14px"
  },
  cardDescription: {
    color: "#999",
    textAlign: "center"
  },
  container: {
    ...container
  },
  description: {
    color: "#999"
  },
  section: {
    ...section,
    padding: "70px 0px"
  },
  priceContainer: {
    display: "inline-flex"
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
  pullRight: {
    float: "right"
  },
  cardHeaderImage: {
    position: "relative",
    padding: "0",
    zIndex: "1",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    borderRadius: "6px",
    "& img": {
      width: "100%",
      borderRadius: "6px",
      pointerEvents: "none"
    },
    "& a": {
      display: "block"
    }
  },
  justifyContentBetween: {
    WebkitBoxPack: "justify!important",
    justifyContent: "space-between !important"
  },
  customExpandPanel: {
    maxHeight: "273px",
    overflowY: "scroll",
    "&  label": {
      display: "block"
    }
  },
  priceSlider: {
    fontWeight: "500"
  },
  refineButton: {
    margin: "-3px 0"
  },
  cardBodyRefine: {
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  textLeft: {
    textAlign: "left"
  },
  collapseItemLink: {
    transition: "all 300ms linear",
    margin: "0 15px",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "10px",
    backgroundColor: "transparent",
    ...defaultFont,
    width: "auto",
    "&:hover": {
      outline: "none",
      backgroundColor: "rgba(" + hexToRgb(grayColor[17]) + ", 0.2)",
      boxShadow: "none"
    },
    "&,&:hover,&:focus": {
      color: "inherit"
    }
  },
  collapseItemMini: {
    color: "inherit",
    ...defaultFont,
    textTransform: "uppercase",
    width: "30px",
    marginRight: "15px",
    textAlign: "center",
    letterSpacing: "1px",
    position: "relative",
    float: "left",
    display: "inherit",
    transition: "transform 300ms ease 0s, opacity 300ms ease 0s",
    fontSize: "14px"
  },
  collapseItemMiniRTL: {
    float: "right",
    marginLeft: "30px",
    marginRight: "1px"
  },
  pagination: {
    display: "flex",
    paddingLeft: "0",
    listStyle: "none",
    borderRadius: "0.25rem"
  },
  paginationItem: {
    display: "inline"
  },
  customNavLink: {
    padding: "3px 55px",
    paddingLeft: "0px !important"


  }
};

export default styles;
