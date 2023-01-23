import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: {
        id: '',
        title: '',
        body: '',
        date: 1234,
        imageUrls: []
    }
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote: (state) => {
        state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
        state.notes.push(action.payload);
        state.isSaving = false;
    },
    setActiveNote: (state, action) => {
        state.active = action.payload
        state.messageSaved = '';
    },
    setNotes: (state, action) => {
        state.notes = (action.payload);
    },
    setSaving: (state) => {
        state.isSaving = true;
        state.messageSaved = '';
    },
    noteUpdated: (state, action) => {
        state.isSaving = false;
        state.notes = state.notes.map(note => {

            if(note.id === action.payload.id) {
                return action.payload;
            }

            return note;
        });

        state.messageSaved = `${action.payload.title} has been updated.`

    },
    deleteNoteById: (state, action) => {

    },
  }
});

export const {
        savingNewNote,
        addNewEmptyNote,
        setActiveNote,
        setNotes,
        setSaving,
        noteUpdated,
        deleteNoteById
            } = journalSlice.actions;

