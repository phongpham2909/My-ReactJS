import {
  container,
  section,
  title,
  mlAuto,
  mrAuto,
  main,
  mainRaised
} from "../../material-kit-pro-react";

const landingPageStyle = {
  mlAuto,
  mrAuto,
  title,
  textCenter: {
    textAlign: "center"
  },
  section: {
    ...section,
    padding: "50px 0px"
  },
  container: {
    color: "#FFFFFF",
    ...container,
    zIndex: "2"
  },
  title1: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#fff",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    ...main
  },
  mainRaised: {
    ...mainRaised
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
  }
};

export default landingPageStyle;
