import {
  cardTitle,
  grayColor
} from "../../material-dashboard-pro-react";

const userProfileStyles = {
  cardTitle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    "& small": {
      fontSize: "80%",
      fontWeight: "400"
    }
  },
  cardCategory: {
    marginTop: "10px",
    color: grayColor[0] + " !important",
    textAlign: "center"
  },
  description: {
    color: grayColor[0],
    textAlign: "justify"
  },
  updateProfileButton: {
    float: "right"
  }
};
export default userProfileStyles;