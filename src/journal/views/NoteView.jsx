import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { ImageGallery } from "../components/ImageGallery"


export const NoteView = () => {

    const { active:note } = useSelector(state => state.journal);

    const {body, title, date, onInputChange, formState} = useForm(note);

    const dateString = new Date(date).toUTCString();

  return (
    <Grid container 
        direction='row'
        justifyContent='space-between'
        alignitems='center'
        sx={{mb: 1}}
        >
        
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'>{dateString}</Typography>
        </Grid>

        <Grid item>
            <Button color="primary" sx={{padding: 2}}>
                <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                Save
            </Button>
        </Grid>

        <Grid container>

            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Enter a title'
                label='Title'
                sx={{border: 'none', mb: 1}}
                name="title"
                value={title}
                onChange={onInputChange}
                />

            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='What happened today?'
                label='Description'
                sx={{border: 'none', mb: 1}}
                minRows= { 5 }
                name="body"
                value={body}
                onChange={onInputChange}
                />

        </Grid>

        <ImageGallery />

    </Grid>
  )
}
