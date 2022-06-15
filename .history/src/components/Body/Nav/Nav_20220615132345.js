import React from 'react'
import "./Nav.css"
import { AiOutlineSearch} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__search">
        <AiOutlineSearch style={{ color:"white", fontSize:"20" }} />
        <input className="nav__search__input" type="text" placeholder="Search" />
      </div>
      <div className="nav__icons">
        <FiSettings />
      </div>
    </div>
  )
}

export default Nav