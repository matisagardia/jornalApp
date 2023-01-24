
import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startLoadingNotes, startNewNote } from "../../store/journal/thunks"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"



export const JournalPage = () => {

  const {isSaving, active} = useSelector(state => state.journal);


  const dispatch = useDispatch();

  const onClickNewNote = () => {

    dispatch(startNewNote());

  }

  return (  


      <JournalLayout>
      {active?.id.length > 0 ? <NoteView /> : <NothingSelectedView />}
      

    <IconButton 
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}>

      <AddOutlined sx={{fontSize: 30}}/>

    </IconButton>

    </JournalLayout>
  )
}
