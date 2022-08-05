import React from 'react'
import './Filter.css'

export default function Filter({sortMovies,setChoice}) {

  return (
    <div className='filter_component'>
      <form>
        <select name="filter_select" onChange={e => setChoice(e.target.value)}>
          <option value="title" >Via title</option>
          <option value="rating">Via rating</option>
        </select>
        <div className='btn-filter'>
          <button type='submit' onClick={sortMovies}>Filter</button>
        </div>
      </form>
    </div>
  )
}
