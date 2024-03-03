
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Home = () => {

    const [showData, setShowData]=useState("");
    const fetchData = async()=>{
        const res= await fetch("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json");
        const json= await res.json();
        
        setShowData(json.appointments);
        console.log(json.appointments);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className="pt-6 px-10 m-3   border-2  border-slate-300 border-solid 	rounded-2xl">
        <h1 className="text-2xl text-gray-400 font-semibold m-4"> Today's Appointment List</h1>
    
    <ul className="grid grid-cols-6 rounded  bg-[#f6f6fc]  py-5 pl-[20px] text-gray-400 font-semibold  ">
        <li>PATIENTS</li>
        <li> DATE</li>
        <li> TIME</li>
        <li> DOCTOR</li>
        <li> INJURY</li>
       
        <li> ACTION</li>
     </ul>
     
     <div >
     {showData && showData.map((obj, index) => <Card key={index} obj={obj} />)}
     </div>
            
    </div>
    
  )
}

export default Home