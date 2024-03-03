
import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { PiAlarmLight } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";

const Card = ({ obj }) => {
    const { patient_name, mobile_number, appointment_date, appointment_time, doctor, injury } = obj;

    return (
        <div className="grid  border-t-2 border-gray-300 grid-cols-6 pl-[30px]  py-4 ">
            <div className="  flex  items-center" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJoVnuKWv43i_Tti7OWhbBsfeyYDCi7KjYxcyXP--Qg&s" alt="" className="h-10 w-10" />
                <div className="flex flex-col ml-2 ">
                    <p className="  font-bold text-black">{patient_name}</p>
                    <p>{mobile_number}</p>
                </div>
            </div>
            <div className="  flex items-center ">
                <CiCalendarDate />
                <p>{appointment_date}</p>
            </div>
            <div className="  flex items-center  ">
                <PiAlarmLight />
                <p>{appointment_time}</p>
            </div>
            <div className="  flex items-center  ">
                <MdStars className="text-[#89D7B5] text-xl" />
                <p  >{doctor}</p>
            </div>
            <div className="  flex items-center ">
                <p className="bg-[#D2DAE9] p-[10px] py-[3px]  rounded-md text-gray-600 font-semibold">{injury}</p>
            </div>
            <div className="  flex items-center pl-5 ">
                <BsThreeDotsVertical className="text-2xl text-gray-300" />
            </div>
          
        </div>
    );
};

export default Card;
