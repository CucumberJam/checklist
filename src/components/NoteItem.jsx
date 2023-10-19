import React, {useMemo, useState} from 'react';
import ButtonApp from "./UI/button/ButtonApp";
import NoteForm from "./NoteForm";
import ModalView from "./UI/modal/ModalView";
const NoteItem = (props) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const setNoteDone = (e) =>{
        e.preventDefault();
        setIsDone(!isDone);
    }

    return (
        <div className="note">
            <div className="note__content">
                <i>{props.number}. </i>
                <strong>{props.note.date.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</strong>
                <div style={{textDecoration: !isDone? 'none' : 'line-through'}}>
                    {props.note.text}
                </div>
            </div>
            <div className="post__btns">
                <ButtonApp onClick={setNoteDone}>
                    {isDone? 'Cancel done' : 'Done'}
                </ButtonApp>
                <ButtonApp onClick={()=> setIsEdit(true)}>
                    Edit
                </ButtonApp>
                <ButtonApp onClick={() => props.remove(props.note)}>
                    Delete
                </ButtonApp>
                <ModalView
                    visible={isEdit}
                    setVisible={setIsEdit}>
                    <p>Edit note</p>
                    <NoteForm create={props.edit} currentNote={props.note}></NoteForm>
                </ModalView>
            </div>
        </div>
    );
}
export default NoteItem;