import React from "react";
// import { Placeholder } from './../../../../node_modules/@babel/types/lib/index-legacy.d';

const FormItem = ({item, onChange, onSubmit, onCancelEdit, isEditing})=>{
    return (
        <form onSubmit={onSubmit}>
            <input
                name = "name"
                value = {item.name}
                onChange={onChange}
                placeholder = "Nama Item"
                required 
            />
            <input
                name = "description"
                value = {item.description}
                onChange = {onChange}
                placeholder="deskripsi"
            />
            <input
                type = "number"
                name = "quantity"
                value = {item.quantity}
                onChange = {onChange}
                placeholder = "jumlah"
                required
             />
             <input 
                type="number"
                step = "0.01"
                name = "price"
                value = {item.price}
                onChange = {onChange}
                placeholder = "Harga"
                required
             />

             <button type = "submit">
                {isEditing? 'Update Item': 'Tambah Item'}
             </button>
             {
                isEditing && 
                <button onClick={onCancelEdit}>
                    Cancel Edit
                </button>
             }
        </form>
    )
}

export default FormItem