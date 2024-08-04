import './App.css'
import { useState } from 'react';
import NoteList from './components/NoteList';
import NoteItem from './components/NoteItem';

function App() {
  const [inputUserNote, setInputUserNote] = useState('');
  const [userNotes, setuserNotes] = useState([]);
  const hasUserNotes = userNotes.length > 0;

  function getUserNote(event) {
    setInputUserNote(event.target.value);
  }

  function handlerSubmit(event) {
    event.preventDefault();
    setuserNotes([...userNotes, inputUserNote]);
    setInputUserNote('');
  }

  function handlerDeleteNote(index) {
    userNotes.splice(index, 1)
    setuserNotes([...userNotes]);
  }

  return (
    <>
      <div>
        <form onSubmit={handlerSubmit}>
          <input
            type="text"
            name="userNote"
            onChange={getUserNote}
            placeholder='Enter note'
            value={inputUserNote}
          >
          </input>
          <button type="submit">Add</button>
        </form>
        <NoteList>
          {userNotes.length === 0 && <p className='black'>Нотаток немає</p>}
          {hasUserNotes && userNotes.map((note, index) => <NoteItem descr={note} key={index} id={index} delete={() => handlerDeleteNote(index)}></NoteItem>)}
        </NoteList>
      </div>
    </>
  )
}

export default App