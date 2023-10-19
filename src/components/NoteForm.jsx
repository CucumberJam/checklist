import React, {useState} from 'react';
import InputApp from "./UI/input/InputApp";
import ButtonApp from "./UI/button/ButtonApp";
import uuid from "react-uuid";
const NoteForm = ({create, currentNote = null}) => {
    const[objNote, setObjNote] =
        useState(!currentNote? {date: '', text: ''} : currentNote);

    const addNewNote = (e) => {
        e.preventDefault(); // // страница не обновляется, данные не передаются на сервер
        const newNote = {
            ...objNote, id: uuid()
        }
        !currentNote? create(newNote) : create({...objNote, id: currentNote.id});
        setObjNote({date: '', text: ''}) // очистили объект
    }

    return (
        <form className="note-form">
            <InputApp
                value={objNote.date}
                onChange={e=>{setObjNote({...objNote, date: e.target.value})}}
                type="date"
                placeholder={!currentNote? "Date of the note..." : currentNote.date}/>
            <InputApp
                value={objNote.text}
                onChange={e=>{setObjNote({...objNote, text: e.target.value})}}
                type="text"
                placeholder={!currentNote? "Description of the note...": currentNote.text}/>
            <ButtonApp type="submit" onClick={addNewNote}>{!currentNote? 'Create note' : 'Change note'}</ButtonApp>
        </form>
    );
};

export default NoteForm;