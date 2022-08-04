import React from 'react'
import './Filter.css'

export default function Filter() {

  return (
    <div className='filter_component'>
      <form>
        <select name="filter_select">
          <option value="tile">Via title</option>
          <option value="rating">Via rating</option>
        </select>
        <div className='btn-filter'>
          <button type='submit'>Filter</button>
        </div>
      </form>
    </div>
  )
}
