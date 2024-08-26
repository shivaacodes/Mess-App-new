import React from "react"
import { useState } from "react";
import DateRangeSelector from "../components/Calender";

export default function Messcut(){
    
    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100" >
            <DateRangeSelector/>
        </div>
        </>  
    );
}