import React from 'react'
import { TbHome } from "react-icons/tb";
import { BiWallet } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineCoffee } from "react-icons/ai";


function Links() {
  return (
    <nav className="sidebar__group">
      <div className="sidebar__option">
        <TbHome style={{ height: "25", width: "30" }} />
        <p className="sidebar__option-text">Discover</p>
      </div>
      <div className="sidebar__option">
        <BiWallet style={{ height: "25", width: "30" }} />
        <p className="sidebar__option-text">New Releases</p>
      </div>
      <div className="sidebar__option">
        <AiOutlineCoffee style={{ height: "25", width: "30" }} />
        <p className="sidebar__option-text">Upcoming</p>
      </div>
      <div className="sidebar__option">
        <AiOutlineHeart style={{ height: "25", width: "30" }} />

        <p className="sidebar__option-text">Favorites</p>
      </div>
    </nav>
  );
}

export default Links