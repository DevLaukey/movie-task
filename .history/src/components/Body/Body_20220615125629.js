import React from 'react'
import "./Body.css"
import Movies from './Movies'
import Nav from './Nav/Nav'
function Body() {
  return (
    <div className="body">
      <Nav />
          <Movies />
      </div>
  )
}

export default Body