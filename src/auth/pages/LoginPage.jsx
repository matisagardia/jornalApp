import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { height } from "@mui/system";
import { Link as RouterLink} from "react-router-dom";


export const LoginPage = () => {
    
  return (
    <Grid
    container
    spacing={0} 
    justifyContent="center" 
    alignContent='center'
    sx={{minHeight: '100vh',backgroundColor: 'primary.main', padding: 4}}>

      <Grid item 
      className="box-shadow"
      sx={{backgroundColor: 'white', padding: 3, borderRadius: 2, width:'50vh'}}>

        <Typography variant="h5" sx={{mb: 1}}>Login</Typography>
        
        <form action="">

          <Grid container gap={2}>

            <Grid item xs={12}>
              <TextField 
              label="E-mail" 
              type="email" 
              placeholder="mail@google.com" 
              fullWidth/>
            </Grid>

            <Grid item xs={12}>
              <TextField 
              label="Password" 
              type="password" 
              placeholder="Password" 
              fullWidth/>
            </Grid>
            
            <Grid container spacing={2} justifyContent='center'>

              <Grid item xs={12} sm={6} >
                <Button variant="contained" fullWidth>
                  Login
                </Button>
                </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>

              </Grid>

            </Grid>

              <Grid container direction='row' justifyContent='end'> 
                <Link component={RouterLink} color='inherit' to='/auth/register'>
                Create Account
                </Link>
              </Grid>

          </Grid>

        </form>

      </Grid>


    </Grid>
  )
}
