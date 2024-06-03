import React,   {useEffect, useState} from 'react';
import axios from 'axios'

import FormItem from './components/FormItem/FormItem';
import ItemList from './components/ItemList/ItemList';

const App = ()=>{
  // membuat state dari item
  const [items, setItems] = useState([])
  // membuat state item baru
  const [newItem, setNewItem] = useState({name: '', description: '', quantity: '', price: ''})
  // membuat state mengedit item
  const [editItem, setEditItem] = useState(null)

  useEffect(()=>{
    fecthItems()
  },[])

  const fecthItems = async ()=>{
    try{
      // gunakan axios untuk get request
      const response = await axios.get('http://localhost:5000/api/items')
      // mengupdate item sebagai hasil dari fetch axios
      setItems(response.data)

    }catch(err){
      console.error('Error', err);
    }
  }

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setNewItem({...newItem, [name] : value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5000/api/items', newItem)
      // tambahkan item dengan response data
      setItems([...items, response.data])
      setEditItem(null)
    }catch(err){
      console.error('Error', err);
    }
  }

  const handleDelete = async (id) =>{
    try{
      await axios.delete('http://localhost:5000/api/items/' + id)
      
      setItem(items.filter((item)=>item.id !== id))
    }catch(err){
      console.error('Error', err);
    }
  }

  const handleEdit = (item) =>{
    setEditItem(item)
  }

  const handleUpdate = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.put(`http://localhost:5000/api/items/${editItem.id}`, editItem)
      setItems(items.map((item)=>(item.id === response.data.id? response.dataa : item)))
      setEditItem(null)
    } catch(err){
        console.error('Error', error)
    }
  }

  const handleEditChange = (e) =>{
    const {name, value} = e.target;
    setEditItem({ ...editItem, [name]: value});
  }

  return (
    <div className='App'>
        <h1>Manajemen Inventaris</h1>
        <FormItem
            item = {editItem ? editItem : newItem}
            onChange = {editItem ? handleEditChange : handleChange}
            onSubmit={editItem ? handleSubmit : handleSubmit}
            onCancelEdit={()=> setEditItem(null)}
            isEditing={editItem != null}
        />
        <ItemList
          items = {items}
          onEdit = {handleEdit}
          onDelete={handleDelete}
        />
    </div>
  )

}

export default App