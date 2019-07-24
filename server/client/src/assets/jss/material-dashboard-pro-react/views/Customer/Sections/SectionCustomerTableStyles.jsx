const styles = {
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
}

export default styles;