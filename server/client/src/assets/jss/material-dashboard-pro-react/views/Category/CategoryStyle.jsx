import tableStyle from '../../components/tableStyle';
const styles = {
    tableStyle,
    tableResponsive: {
        marginTop: "30px",
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
    textCenter: {
        textAlign: "center"
    },
    textRight: {
        textAlign: "right"
    },
    textLeft: {
        textAlign: "left"
    },
    customBorderBottom1: {
        borderBottom: "0px solid #000 !important",
        paddingBottom: "30px"
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
    actionButton: {
        marginLeft: "5px",
        padding: "5px",
        "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
            marginRight: "0px"
        }
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
    mrRightButton: {
        marginRight: "20px"
    },
}



export default styles;