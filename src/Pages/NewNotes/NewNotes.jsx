import React, { useState } from 'react';
import './NewNotes.css'
import Navbar from '../../Components/Navbar/Navbar'


const NewNotes = () => {
  const [noteName, setNoteName] = useState("")
  const [noteDesc, setNoteDesc] = useState("")
  const [noteDeg, setNoteDeg] = useState("")

  function malumotSaqlash(e) {
    e.preventDefault()



    let arr = JSON.parse(localStorage.getItem("data")) || []
    let Myid = Date.now()
    let time = new Date();
    let myobj = {
      id: Myid,
      nomi: noteName,
      tarifi: noteDesc,
      darajasi: noteDeg,
      sana: `${time.toLocaleTimeString()}, ${time.toLocaleDateString()}`



    }

    arr.push(myobj)
    localStorage.setItem("data", JSON.stringify(arr))
  }
  return (
    <div>
      < Navbar />
      <div className="container1">
        <form id="contact" onSubmit={malumotSaqlash}>
          <h3>Yangi Notes</h3>
          <h4>Kuningizni biz bilan rejalashtring!!!</h4>
          <fieldset>
            <input value={noteName} onChange={e => setNoteName(e.target.value)} style={{ color: "black" }} placeholder="Your name" type="text" tabIndex={1} required autofocus />
          </fieldset>
          <fieldset>
            <select value={noteDeg} name="" id="" onChange={e => setNoteDeg(e.target.value)}>
              <option value="low" disabled> Qiymat tanlang</option>
              <option value="low"> Kam</option>
              <option value="medium"> Ortacha</option>
              <option value="high"> Shart</option>
            </select>
          </fieldset>

          <fieldset>
            <textarea onChange={e => setNoteDesc(e.target.value)} placeholder="Tarifni yozing..." tabIndex={5} required defaultValue={""} />

          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">JONATISH</button>
          </fieldset>
        </form>
      </div>

    </div>
  );
}

export default NewNotes;
