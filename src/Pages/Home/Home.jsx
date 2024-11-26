import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
    const [name, setName] = useState("user")
    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if (storedName) {
            setName(storedName);
        }
    }, []); // Em
    return (
        <div className='home'>
            <Navbar />

            <h1>You are in a home page Mr{name}</h1>
        </div>
    );
}

export default Home;
