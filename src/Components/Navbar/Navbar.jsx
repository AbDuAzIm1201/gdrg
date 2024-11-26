import React, { useState } from "react";
import "./Navbar.css";
import User from "../../assets/9187604.png";
import {Link} from 'react-router-dom'
import Modal from "../Modal/Modal";
const Navbar = () => {
  const [open, setOpen] = useState("closed")
  function modalkaOchilishi(){
setOpen(prev => prev == "ochiq"? "closed":"ochiq")
  }
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="wrapper">

        <h1 className="logo">Notes</h1>
        
        <ul className="nav no-search">
          <li className="nav-item">
            <Link  to='/'>Home</Link>
          </li>
          <li className="nav-item">
           <Link to='/newnotes'>New Notes</Link>
          </li>
          <li className="nav-item">
            <Link to='/mynotes'>My Notes</Link>
          </li>
        </ul>
        <img onClick={modalkaOchilishi} src={User} alt="" />
        </div>
          </div>
      </nav>
     <Modal modal={open} setModal={setOpen} />
    </div>
  );
};

export default Navbar;
