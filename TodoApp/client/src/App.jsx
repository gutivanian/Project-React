import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []); // Fetch data once when the component mounts

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data); // Update the state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleChange = (e) => {
    const valueData = e.target.value;
    if (e.target.name === 'title') {
      setTitle(valueData);
    } else if (e.target.name === 'description') {
      setDescription(valueData);
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = { title, description };
    try {
      const response = await axios.post('http://localhost:5000/api/todos', newTodo);
      setTodos([...todos, response.data]); // Add new todo to the state
      setTitle(''); // Clear input fields
      setDescription(''); // Clear input fields
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }

  return (
    <div>
      <div className="judul">
        Todo App
      </div>
      <div className="todo-container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Title' onChange={handleChange} value={title} name='title' />
          <input type="text" placeholder='Description' onChange={handleChange} value={description} name='description' />
          <button type='submit'>Add</button>
        </form>      
      </div>
      <div className="item-list">
        {todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
