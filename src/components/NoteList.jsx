import NoteItem from "./NoteItem";
import React from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";
const NoteList = ({notes, title, remove, edit /*, done*/}) => {
    if(!notes.length){
        return (
            <h2 style={{textAlign: 'center', color: "grey"}}>
                No notes yet...
            </h2>
        );
    }
    return (
        <>
            <h1 style={{textAlign: 'center', color: 'grey'}}>{title}</h1>
            <TransitionGroup>
                {notes.map((note, index) =>
                    <CSSTransition
                        key={note.id}
                        timeout={500}
                        classNames="note"
                    >
                        <NoteItem
                              edit={edit}
                              remove={remove}
                              number={index+1}
                              note={note}
                              key={note.id}/>
                    </CSSTransition>
                    )
                }
            </TransitionGroup>
        </>
    );
}

export default NoteList;