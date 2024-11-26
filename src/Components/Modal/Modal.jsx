import React, { useContext, useEffect, useState } from 'react';
import "./Modal.css"
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../Context';


const Modal = ({modal, setModal}) => {
   const [name, setName] =useState ("")
   const {dark, setDark} = useContext(DarkModeContext )
     let navigate = useNavigate()
   useEffect(() => {
    let ism =  localStorage.getItem("name")
    setName(ism)
   })
   function chiqish(){
    localStorage.removeItem("auth")
    navigate("/")
   }
    return (
        <div>
            <div className={` modal ${modal} ${dark}`}>
                <div className="modal-container">
                    <div className="modal-wrapper">
                        <span onClick={()=> setModal(prev => prev == "closed"? "ochiq":"closed ")} className={` cancel ${dark}`}>x</span>
                        <h2>
                            Ism:{name}
                        </h2>
                        <h2>Dark mode <button onClick={()=> setDark(prev=> prev == "off"? "on": "off")}> {dark} </button></h2> 
                        <button onClick={chiqish} >Chiqish</button>
                    </div>
                </div>
            </div>      
        </div>
    );
}

export default Modal;
