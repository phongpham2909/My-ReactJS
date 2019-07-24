import { lighten } from '@material-ui/core/styles/colorManipulator';
const useToolbarStyles = theme => ({
    root: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px"
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
        paddingRight: "30px"
    },
    title: {
        flex: '0 0 auto',
        paddingLeft: "20px"
    },
    customButton: {
        marginLeft: "10px",
        padding: "10px 20px"
    }
});

export default useToolbarStyles;