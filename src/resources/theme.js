import blue from '@material-ui/core/colors/blue'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

export const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
  },
})
