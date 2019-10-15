export default theme => ({
  paper: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  span: {
    background: 'rgba(0,0,0,0.05)',
    fontSize: 16,
    fontFamily: 'fixed',
    padding: theme.spacing(1),
    borderRadius: 8,
  },
})
