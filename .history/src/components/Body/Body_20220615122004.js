import React from 'react'
import "./Body.css"
import Sidebar from './Sidebar'
import Movies from './Movies'
function Body() {
  return (
      <div>
          <Sidebar />
          <Movies />
      </div>
  )
}

export default Body