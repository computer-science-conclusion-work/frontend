export default theme => ({
    root: {
      width: '100%',
      marginBottom: 20,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    filter: {
      padding: 15,
      marginBottom: 15,
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    centerBlock: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    center: {
      textAlign: 'center',
    },
    graph: {
      height: 20,
    },
    details: {
      alignItems: 'center',
    },
    gridContainer: {
      width: '100%',
    },
    form: {
      width: '100%',
    },
    column: {
      flexBasis: '33.33%',
    },
    chip: {
      margin: 5,
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    cardMedia: {
      width: 140,
      height: 140,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    grow: {
      flexGrow: 1,
    },
    titleButton: {
      marginBottom: 10,
    },
    title: {
      color: 'red',
      fontWeight: 700,
      color: theme.palette.secondary.main,
    },
    btnIcon: {
      marginRight: theme.spacing(1),
    },
    content: {
      marginTop: theme.spacing(2),
    },
    appBar: {
      position: 'relative',
    },
    dialogActions: {
      paddingRight: 15,
    },
    flex: {
      flex: 1,
    },
    padding: {
      padding: 15,
    },
    paper: {
      padding: theme.spacing(3),
    },
    paperInfo: {
      marginBottom: 20,
    },
    formControl: {
      minWidth: 180,
    },
    img: {
      height: 40,
      display: 'block',
      maxWidth: '100%',
    },
  })
  