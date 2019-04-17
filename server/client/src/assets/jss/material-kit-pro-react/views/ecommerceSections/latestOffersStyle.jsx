import {
  section,
  container,
  cardTitle,
  coloredShadow,
  mlAuto,
  mrAuto,
  title
} from "../../../material-kit-pro-react";

import tooltipsStyle from "../../tooltipsStyle";

const styles = {
  title,
  cardTitle,
  container,
  ...tooltipsStyle,
  section: {
    ...section,
    padding: "50px 0px"
  },
  coloredShadow,
  cardDescription: {
    color: "#999",
    textAlign: "center"
  },
  mlAuto,
  mrAuto,
  priceContainer: {
    display: "inline-flex"
  },
  price: {
    fontSize: "18px",
    color: "#9a9a9a"
  },
  priceOld: {
    fontSize: "16px",
    textDecoration: "line-through"
  },
  priceNew: {
    color: "#f44336"
  },
  stats: {
    color: "#999"
  },
  textCenter: {
    textAlign: "center"
  },
  customFont: {
    fontSize: "1em"
  }
};

export default styles;
