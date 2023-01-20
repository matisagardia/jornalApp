import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink} from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startEmailPasswordSignIn, startGoogleSignIn } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";


export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state => state.auth);

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm( {

    email:'',
    password: ''

  } );


  const onSubmit = (e) => {

    e.preventDefault();
    dispatch(startEmailPasswordSignIn({email, password}));

  };

  const onGoogleSignIn = () => {

    dispatch(startGoogleSignIn());
  }

  return (

      <AuthLayout title="Login">
          
        <form onSubmit={onSubmit}>

          <Grid container gap={2}>

            <Grid item xs={12}>
              <TextField 
              label="E-mail" 
              type="email" 
              placeholder="mail@google.com" 
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
              label="Password" 
              type="password" 
              placeholder="Password" 
              name="password"
              value={ password }
              onChange={ onInputChange }
              fullWidth/>
            </Grid>
            
            <Grid container spacing={2} justifyContent='center'>

            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

              <Grid item xs={12} sm={6} >
                <Button 
                  disabled={isAuthenticating}
                  variant="contained" 
                  fullWidth type="submit">
                  Login
                </Button>
                </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                  variant="contained" 
                  fullWidth onClick={onGoogleSignIn}
                  disabled={isAuthenticating}>
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

      </AuthLayout>

  )
}
