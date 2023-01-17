import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import {LogoutOutlined, MenuOutlined} from '@mui/icons-material';
import {Grid} from '@mui/material';



export const NavBar = ({drawerWidth = 240}) => {
  return (
    <AppBar 
        position='fixed'
        sx={{
          width:{ md: `calc(100% - ${ drawerWidth }px)`},
          ml: {sm: `${drawerWidth}`}
        }}>

        <Toolbar>

            <IconButton 
                color='inherit'
                edge='start'
                sx={{mr:2, display: {md:'none'}}}
                >
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>

              <Typography variant='h5' noWrap component='div'>JournalApp</Typography>

              <IconButton color='inherit'>
                <LogoutOutlined />
              </IconButton>

            </Grid>

        </Toolbar>

    </AppBar>
  )
}
