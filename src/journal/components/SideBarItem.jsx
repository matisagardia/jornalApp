import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


export const SideBarItem = ({title, body, id}) => {

    const newTitle = title.length > 17 ? title.substring(0, 17) + '...' : title;



  return (
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={newTitle}/>
                                <ListItemText secondary={body}/>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
  )
}
