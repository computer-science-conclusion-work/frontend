export default theme => ({
  paper: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  divider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  span: {
    background: 'rgba(0,0,0,0.05)',
    fontSize: 16,
    fontFamily: 'fixed',
    padding: theme.spacing.unit,
    borderRadius: 8,
  },
})
