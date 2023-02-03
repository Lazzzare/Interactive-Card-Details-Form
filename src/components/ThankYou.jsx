import React from "react";
import tick from '../assets/images/icon-complete.svg'


const ThankYou = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <img src={tick} alt="complete-image" className="block mx-auto" />
                <h1 className="text-slate-800 text-3xl my-6 uppercase text-center">Thank You</h1>
                <p className="text-slate-400 text-center">We've added your cards details</p>
                <button className="btn block mx-auto mt-10 w-full">Confirm</button>
            </div>
        </>
    );
};

export default ThankYou;
