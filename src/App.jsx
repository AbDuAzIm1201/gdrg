import React, { useContext } from 'react';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import {Routes, Route} from 'react-router-dom'
import NewNotes from './Pages/NewNotes/NewNotes';
import MyNotes from './Pages/MyNotes/MyNotes';
import { DarkModeContext } from './Components/Context';
const App = () => {
  const {dark, setDark} = useContext(DarkModeContext)
  return (
    <div className={dark}>
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path='/home' element={<Home />} />
    <Route path='/newnotes' element={<NewNotes />} />
    <Route path='/mynotes' element={<MyNotes />} />

   </Routes>
    </div>
  );
}

export default App;
