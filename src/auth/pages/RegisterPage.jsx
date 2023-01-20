import { Alert, Button, Grid, Link, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink} from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";

const formValidations = {
  email: [(value) => value.includes('@'), 'The mail needs to have @'],
  displayName: [(value) => value.length >= 1, 'The name needs to be longer than 1 character'],
  displayLastName: [(value) => value.length >= 1, 'The last name needs to be longer than 1 character'],
  password: [(value) => value.length >= 6, 'The password needs to be longer than 6 characters'],
};

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const {status, errorMessage} = useSelector(state => state.auth);

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {displayName, displayLastName, email, isFormValid, displayNameValid, emailValid, passwordValid, displayLastNameValid,
         password, onInputChange, formState} = useForm( {

    email:'',
    password: '',
    displayName: '',
    displayLastName: ''

  }, formValidations );


  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  


  return (

      <AuthLayout title="Register Account">

        <form onSubmit={onSubmit}>

          <Grid container gap={2}>

            <Grid item xs={12}>
              <TextField 
              label="Name" 
              type="text" 
              placeholder="Insert your name" 
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField 
              label="Last Name" 
              type="text" 
              placeholder="Insert your last name" 
              fullWidth
              name="displayLastName"
              value={displayLastName}
              onChange={onInputChange}
              error={!!displayLastNameValid && formSubmitted}
              helperText={displayLastNameValid}/>
            </Grid>

            <Grid item xs={12}>
              <TextField 
              label="E-mail" 
              type="email" 
              placeholder="mail@google.com" 
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}/>
            </Grid>

            <Grid item xs={12}>
              <TextField 
              label="Password" 
              type="password" 
              placeholder="Insert your password" 
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}/>
            </Grid>

            <Grid container spacing={2} justifyContent='center'>

            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12} sm={12} >
              <Button 
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained" 
                fullWidth>
                Register
              </Button>
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
