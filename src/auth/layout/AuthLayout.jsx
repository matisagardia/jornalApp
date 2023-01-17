import { Grid } from "@mui/material"
import {Typography} from "@mui/material"

export const AuthLayout = ({children, title = ''}) => {
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

        <Typography variant="h5" sx={{mb: 1}}>{title}</Typography>

        {children}

        </Grid>
    </Grid>

  )
}
