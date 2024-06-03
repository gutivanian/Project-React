import React from 'react'
import {useState, useEffect} from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState([])
  
  const handleChange = (e)=>{
    const valueData = e.target.value
    if (e.target.name === 'title'){
      setTitle(valueData)
    } else if (e.target.name === 'description'){
      setDescription(valueData)
    }
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const newTodo = {
      title, description
    }
    setTodos([...todos, newTodo])
    console.log(newTodo)
  }

  return (
    <div>
      <div className="judul">
        Todo App
      </div>
      <div className="todo-container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Title' onChange={handleChange} value={title} name = 'title'/>
          <input type="text " placeholder='Description' onChange = {handleChange} value={description} name ='description'/>
          <button type='submit'>Add</button>
        </form>

      
      </div>

    </div>
  )
}

export default App