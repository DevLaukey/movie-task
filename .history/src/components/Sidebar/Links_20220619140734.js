import React from 'react'
import { TbHome } from "react-icons/tb";
import { BiWallet } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineCoffee } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Links() {
  return (
    <nav className="sidebar__group">
      <div className="sidebar__option">
        <TbHome style={{ height: "25", width: "30" }} />
        <Link to="/" className="sidebar__option-text">Discover</Link>
      </div>
      <div className="sidebar__option">
        <BiWallet style={{ height: "25", width: "30" }} />
        <Link to="/new-releases"className="sidebar__option-text">New Releases</Link>
      </div>
      <div className="sidebar__option">
        <AiOutlineCoffee style={{ height: "25", width: "30" }} />
        <Link to="upcoming"className="sidebar__option-text">Upcoming</Link>
      </div>
      <div className="sidebar__option">
        <AiOutlineHeart style={{ height: "25", width: "30" }} />

        <Link to="favorites"className="sidebar__option-text">Favorites</Link>
      </div>
    </nav>
  );
}

export default Links