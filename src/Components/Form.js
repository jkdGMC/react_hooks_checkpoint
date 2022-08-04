import React from 'react'
import './Form.css'

export default function Form({newMovie,setNewMovie, onSubmit}) {

  return (
    <div className="form_component">
      <form className='add-form' >
        <input type="text" placeholder='Image Url' value={newMovie.posterUrl} onChange={e => {setNewMovie({...newMovie, posterUrl : e.target.value})}} required/>
        <input type="text" placeholder='Title' value={newMovie.title} onChange={e => {setNewMovie({...newMovie, title : e.target.value})}} required/>
        <textarea cols="30" rows="10" placeholder='Description...' value={newMovie.description} onChange={e => {setNewMovie({...newMovie, description : e.target.value})}} required></textarea>
        <input type="number" max='10' min='0' placeholder='Rating' value={newMovie.rating} onChange={e => {setNewMovie({...newMovie, rating : e.target.value})}} required/>
        <button type='submit' className='btn' onClick={onSubmit}>Add new movie</button>
      </form>
    </div>
  )
}
