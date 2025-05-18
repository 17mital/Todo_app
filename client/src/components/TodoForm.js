import React, { useState } from 'react';
import axios from 'axios';

export default function TodoForm({ refreshTodos }) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/api/todos`, { text });
    setText('');
    refreshTodos();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}
