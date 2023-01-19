import { Button, Grid, Link, TextField } from "@mui/material";
import { Link as RouterLink} from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";

const formValidations = {
  email: [(value) => value.includes('@'), 'The mail is incorrect'],
  displayName: [(value) => value.length <= 1, 'The name needs to be longer than 1 character'],
  displayLastName: [(value) => value.length <= 1, 'The last name needs to be longer than 1 character'],
  password: [(value) => value.length <= 6, 'The password needs to be longer than 6 characters'],
};

export const RegisterPage = () => {

  const {displayName, displayLastName, email, isFormValid, displayNameValid, emailValid, passwordValid, displayLastNameValid,
         password, onInputChange, formState} = useForm( {

    email:'',
    password: '',
    displayName: '',
    displayLastName: ''

  }, formValidations );

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }
    
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
              error={!formValidations.email}/>
            </Grid>

            <Grid item xs={12}>
              <TextField 
              label="Last Name" 
              type="text" 
              placeholder="Insert your last name" 
              fullWidth
              name="displayLastName"
              value={displayLastName}
              onChange={onInputChange}/>
            </Grid>

            <Grid item xs={12}>
              <TextField 
              label="E-mail" 
              type="email" 
              placeholder="mail@google.com" 
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}/>
            </Grid>

            <Grid item xs={12}>
              <TextField 
              label="Password" 
              type="password" 
              placeholder="Insert your password" 
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}/>
            </Grid>

            <Grid container spacing={2} justifyContent='center'>

              <Grid item xs={12} sm={12} >
                <Button 
                  type="submit"
                  variant="contained" 
                  fullWidth>
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
