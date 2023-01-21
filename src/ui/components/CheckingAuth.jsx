import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {


  return (
    
    <Grid
    container
    spacing={0} 
    justifyContent="center" 
    alignContent='center'
    sx={{minHeight: '100vh',backgroundColor: 'primary.main', padding: 4}}>

      <Grid item >
        <CircularProgress color="warning"/>
      </Grid>

    </Grid>

  )
}
