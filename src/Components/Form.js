import React from 'react'
import './Form.css'

export default function Form({newMovie,setNewMovie, onSubmit}) {

  return (
    <div className="form_component">
      <form>
        <input type="text" placeholder='Image Url' onChange={e => {setNewMovie({...newMovie, posterUrl : e.target.value})}} required/>
        <input type="text" placeholder='Title' onChange={e => {setNewMovie({...newMovie, title : e.target.value})}} required/>
        <textarea cols="30" rows="10" placeholder='Description...' onChange={e => {setNewMovie({...newMovie, description : e.target.value})}} required></textarea>
        <input type="text" placeholder='Rating' onChange={e => {setNewMovie({...newMovie, rating : e.target.value})}} required/>
        <button type='submit' className='btn' onClick={onSubmit}>Add new movie</button>
      </form>
    </div>
  )
}
