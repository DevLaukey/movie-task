import React from 'react'
import "./Nav.css"
import { AiOutlineSearch} from "react-icons/ai";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__search">
        <AiOutlineSearch style={{ color:"white", fontSize:"40" }} />
        <input className="nav__search__input" type="text" placeholder="Search" />
      </div>
      <div className="nav__icons">
        icons
      </div>
    </div>
  )
}

export default Nav