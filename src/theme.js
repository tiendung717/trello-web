import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { pink } from '@mui/material/colors'

const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: pink[600]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: pink[400]
        }
      }
    }
  }
})

export default theme