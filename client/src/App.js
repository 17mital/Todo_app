// client/src/App.js

import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>📝 MERN Todo App</h1>
      <TodoForm refreshTodos={() => setRefresh(!refresh)} />
      <TodoList refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
}

export default App;
