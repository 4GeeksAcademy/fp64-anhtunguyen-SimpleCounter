import React from "react";
import { useState, useEffect } from 'react';
import { Counter } from './counter.jsx'
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
    
    const [counter, setCounter] = useState(0)
    useEffect (() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        },1000)
        return () => clearInterval(interval)
    },[])
	return (
        <>
        <Counter props={counter}/>
        </>
    )
};

export default Home;
