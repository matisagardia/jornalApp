import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import {LogoutOutlined, MenuOutlined} from '@mui/icons-material';
import {Grid} from '@mui/material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';



export const NavBar = ({drawerWidth = 240}) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout())
  };

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

              <IconButton color='inherit' onClick={onLogout}>
                <LogoutOutlined />
              </IconButton>

            </Grid>

        </Toolbar>

    </AppBar>
  )
}
