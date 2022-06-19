import React from "react";
import { TbHome } from "react-icons/tb";
import { BiWallet } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineCoffee } from "react-icons/ai";
import { Link } from "react-router-dom";

function Links() {
  return (
    <nav className="sidebar__group">
      <Link to="/" className="sidebar__option">
        <TbHome style={{ height: "25", width: "30" }} />
        <p className="sidebar__option-text">Discover</p>
      </Link>
      <Link to="new-releases" className="sidebar__option">
        <BiWallet style={{ height: "25", width: "30" }} />
        <p className="sidebar__option-text">New Releases</p>
      </Link>
      <Link to="upcoming" className="sidebar__option">
        <AiOutlineCoffee style={{ height: "25", width: "30" }} />
        <p className="sidebar__option-text">Upcoming</p>
      </Link>
      <Link to="favorites" className="sidebar__option">
        <AiOutlineHeart style={{ height: "25", width: "30" }} />

        <p className="sidebar__option-text">Favorites</p>
      </Link>
    </nav>
  );
}

export default Links;
