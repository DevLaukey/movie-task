import React from 'react'
import "./Nav.css"
import { AiOutlineSearch} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__search">
        <AiOutlineSearch style={{ color: "white", fontSize: "20" }} />
        <input
          className="nav__search__input"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="nav__icons">
        <FiSettings />
        <img
          src={`https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png`}
          alt=""
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav