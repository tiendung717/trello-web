import { Box, Button } from '@mui/material'


function AppBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
      <Button variant='text'>Test</Button>
    </Box>
  )
}

export default AppBar