import React, { useState, useEffect } from 'react';

const App = () => {
  const [notes, setNotes] = useState([]); // State for storing notes
  const [currentNote, setCurrentNote] = useState({ id: null, title: '', content: '' });

  // Load notes from local storage on component mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Handle form submission to save or update a note
  const handleSaveNote = (e) => {
    e.preventDefault();
    if (currentNote.id) {
      // Edit existing note
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === currentNote.id ? { ...note, title: currentNote.title, content: currentNote.content } : note
        )
      );
    } else {
      // Add new note
      setNotes((prevNotes) => [
        ...prevNotes,
        { id: Date.now(), title: currentNote.title, content: currentNote.content },
      ]);
    }
    setCurrentNote({ id: null, title: '', content: '' }); // Reset form
  };

  // Handle editing a note
  const handleEditNote = (note) => {
    setCurrentNote(note);
  };

  // Handle deleting a note
  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Notes App</h1>
      {/* Note Form */}
      <form onSubmit={handleSaveNote} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Title"
          value={currentNote.title}
          onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
          required
          style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
        />
        <textarea
          placeholder="Content"
          value={currentNote.content}
          onChange={(e) => setCurrentNote({ ...currentNote, content: e.target.value })}
          required
          style={{ padding: '10px', width: '100%', height: '100px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          {currentNote.id ? 'Update Note' : 'Add Note'}
        </button>
      </form>

      {/* Notes List */}
      {notes.length > 0 ? (
        <div>
          {notes.map((note) => (
            <div
              key={note.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
              }}
            >
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div>
                <button onClick={() => handleEditNote(note)} style={{ marginRight: '10px' }}>
                  Edit
                </button>
                <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No notes available. Add one!</p>
      )}
    </div>
  );
};

export default App;
