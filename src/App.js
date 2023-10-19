import React, {useMemo, useState} from 'react';
import './styles/App.css';
import NoteList from "./components/NoteList";
import ButtonApp from "./components/UI/button/ButtonApp";
import NoteForm from "./components/NoteForm";
import ModalView from "./components/UI/modal/ModalView";
import NoteFilter from "./components/NoteFilter";
function App() {
    const[notes, setNotes] = useState([]);
    const [modal, setModal] = useState(false);
    const[filter, setFilter] = useState({sort: '', query: ''});

    const sortedNotes = useMemo(()=>{
        if (filter.sort){
            return [...notes].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return notes;
    }, [filter.sort, notes]);

    const sortedAndSearchedNotes = useMemo(()=>{
        return sortedNotes.filter(note => note.text.toLowerCase().includes(filter.query));
    }, [filter.query, sortedNotes]);
    const createNote = (newNote) => {
        setNotes([...notes, newNote]);
        setModal(false);
    }
    const removeNote = (note) => {
        setNotes(notes.filter(p => p.id !== note.id));
    }
    const changedNote = (currentNote) => {
        setNotes(notes.map(note => {
            if (note.id === currentNote.id) {
                note.date = currentNote.date;
                note.text = currentNote.text;
                note.done = currentNote.done;
                return note;
            }
            return note;
        }));
    }


    return (
        <div className="App">
            <ButtonApp
                onClick={()=> setModal(true)}
                style={{marginTop: '20px'}}>
                Create note
            </ButtonApp>
            <ModalView
                visible={modal}
                setVisible={setModal}>
                <p>Add note</p>
                <NoteForm
                    create={createNote}>
                </NoteForm>
            </ModalView>
            <NoteFilter filter={filter} setFilter={setFilter}/>
            <NoteList
                remove={removeNote}
                notes={sortedAndSearchedNotes}
                title="List of notes:"
                edit={changedNote}/>
        </div>
    );
}

export default App;
