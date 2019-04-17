import { cardTitle, primaryColor, grayColor } from "../../../material-dashboard-pro-react";
import extendedFormStyle from "../extendedFormsStyle";
import regularFormsStyle from "../regularFormsStyle";
import customCheckboxRadioSwitch from "../../customCheckboxRadioSwitch";
import purple from '@material-ui/core/colors/purple';
import customSelectStyle from "../../customSelectStyle";

const productManagementStyle = theme => ({
  ...customCheckboxRadioSwitch,
  ...customSelectStyle,
  ...regularFormsStyle,
  ...extendedFormStyle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  root: {
    width: "100%",
    marginTop: "-20px"
  },
  table: {
    minWidth: 800
  },
  tableWrapper: {
    overflowX: "auto"
  },
  customTableCell: {
    padding: "5px 5px 5px 10px"
  },
  imgContainer: {
    width: "120px",
    maxHeight: "160px",
    overflow: "hidden",
    display: "block"
  },
  img: {
    width: "100%",
    height: "auto",
    verticalAlign: "middle",
    border: "0"
  },
  actionButton: {
    marginLeft: "5px",
    padding: "5px",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      marginRight: "0px"
    }
  },
  icon: {
    verticalAlign: "middle",
    width: "17px",
    height: "17px",
    top: "-1px",
    position: "relative"
  },
  tdColorSuccess: {
    color: "#fff",
    backgroundColor: "#4caf50"
  },
  tdColorWarning: {
    color: "#fff",
    backgroundColor: "#ff9800"
  },
  tdColorError: {
    color: "#fff",
    backgroundColor: "#f44336"
  },
  customStatus: {
    height: "25px",
    borderRadius: "4px"
  },
  mr1: {
    marginLeft: "-25px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 350
  },
  customCardIcon: {
    float: "right !important",
    marginTop: "15px !important",
    marginRight: "0px !important",
    padding: "0px !important"
  },
  customIcon: {
    margin: "4px 4px 4px !important"
  },
  customInput: {
    margin: "-10px !important"
  },
  labelHorizontal: {
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "40px",
    marginRight: "0"
  },
  justifyContentCenter: {
    justifyContent: "center"
  },
  mrRightButton: {
    marginRight: "20px"
  },
  inlineChecks: {
    marginTop: "25px"
  },
  root1: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  customCheckbox: {
    '&$checked': {
      color: purple[500],
    },
    checked: {},
  },
  selectFormControl: {
    margin: "25px 1px 25px 0px !important",
    "& > div": {
      "&:before": {
        borderBottomWidth: "1px !important",
        borderBottomColor: grayColor[4] + "!important"
      },
      "&:after": {
        borderBottomColor: primaryColor[0] + "!important"
      }
    }
  },

});

export default productManagementStyle;
