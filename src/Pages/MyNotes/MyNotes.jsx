import { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './MyNotes.css'


const MyNotes = () => {
  const [data, setData] = useState([])
  const [input, setInput] = useState((""))
  const [deg, setDeg] = useState((""))
  const [sort, setSort] = useState((""))
  useEffect(() => {
    let parsedArray = JSON.parse(localStorage.getItem("data"))
    parsedArray = parsedArray.filter(note => note.nomi.toLowerCase().includes(input.toLowerCase()))
    if (deg) {
      parsedArray = parsedArray.filter(note => note.darajasi == deg)
      setData(parsedArray)

    }
    if (sort == "az") {
   parsedArray.sort((a,b) => a.nomi.localeCompare(b.nomi))
    }else if(sort == "za"){
      parsedArray.sort((a,b) => b.nomi.localeCompare(a.nomi)) 
    }
    setData(parsedArray)
  }, [input, deg, sort])

  function ochirish(_id){
     let updateArray = data.filter(note => note.id !=note.id)
     setData(updateArray)
     localStorage.setItem("data" , JSON.stringify(updateArray))

  }
  return (
    <div>
      <Navbar />
      <div className="searchbar">
        <div className="container">
          <div className="wrapper">
            <input value={input} type="text" onChange={e => setInput(e.target.value)} style={{ marginBottom: "0px", padding: "10px", background: "white", color: "black" }} />
            <select value={deg} onChange={e => setDeg(e.target.value)} name="" id="">
              <option value="" disabled>Darajasini tanglang</option>
              <option value="low" >Kam</option>
              <option value="medium">Oratcha</option>
              <option value="high" >Shart</option>
            </select>
            <select value={sort} onChange={e => setSort(e.target.value)} name="" id="">
              <option value="" disabled> Sortlash</option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
          </div>
        </div>
      </div>
      <div className="cards">
        {data.map(note => (
          <div className="card" key={note.id}>
            <p>Nomi:{note.nomi}</p>
            <p>Tarifi:{note.tarifi}</p>
            <p>Darajasi:{note.darajasi}</p>
            <p>Sana:{note.sana}</p>
            <button onClick={()=> ochirish(note.id)}>Ochirish</button>
          </div>
        ))}
      </div>


    </div>
  );
}

export default MyNotes;
