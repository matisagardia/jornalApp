import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { height } from "@mui/system";
import { Link as RouterLink} from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";


export const RegisterPage = () => {
    
  return (

      <AuthLayout title="Register Account">
          
        <form action="">

          <Grid container gap={2}>

            <Grid item xs={12}>
              <TextField 
              label="Name" 
              type="text" 
              placeholder="Insert your name" 
              fullWidth/>
            </Grid>

            <Grid item xs={12}>
              <TextField 
              label="Last Name" 
              type="text" 
              placeholder="Insert your last name" 
              fullWidth/>
            </Grid>

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
              placeholder="Insert your password" 
              fullWidth/>
            </Grid>

            <Grid item xs={12}>
              <TextField 
              label="Repeat your password" 
              type="password" 
              placeholder="Password" 
              fullWidth/>
            </Grid>
            
            <Grid container spacing={2} justifyContent='center'>

              <Grid item xs={12} sm={12} >
                <Button variant="contained" fullWidth>
                  Register
                </Button>
                </Grid>
              <Grid item xs={12} sm={6}>

              </Grid>

            </Grid>

              <Grid container direction='row' justifyContent='end'> 
                <Link component={RouterLink} color='inherit' to='/auth/login'>
                Already have an account?
                </Link>
              </Grid>

          </Grid>

        </form>

      </AuthLayout>

  )
}
