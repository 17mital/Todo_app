// client/src/components/TodoList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TodoList({ refresh, setRefresh }) {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/todos`);
      setTodos(res.data);
    } catch (err) {
      console.error('Error fetching todos:', err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [refresh]);

  const handleDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/todos/${id}`);
    setRefresh(!refresh);
  };

  const handleToggle = async (id, completed) => {
    await axios.put(`${process.env.REACT_APP_API_URL}/api/todos/${id}`, { completed: !completed });
    setRefresh(!refresh);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <span
            onClick={() => handleToggle(todo._id, todo.completed)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => handleDelete(todo._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
