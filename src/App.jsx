import './App.css'
import { useState } from 'react';
import NoteList from './components/NoteList/NoteList';
import NoteItem from './components/NoteItem/NoteItem';

function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    setNote(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (note !== '') {
      setNotes([...notes, note]);
      setNote('');
    }
  }

  function handleDelete(index) {
    notes.splice(index, 1)
    setNotes([...notes]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userNote"
          onChange={handleChange}
          placeholder='Enter note'
          value={note}
        />
        <button type="submit">Add</button>
      </form>
      <NoteList>
        {notes.length === 0 ? <p>Нотаток немає</p> :
          notes.map((note, index) => <NoteItem note={note} key={index} onDelete={() => handleDelete(index)} />)}
      </NoteList>
    </div>
  )
}

export default App