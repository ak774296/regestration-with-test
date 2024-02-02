import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import * as React from 'react';


export default function Home() {
  
  return (
       <div className="flex flex-col">
         <div className="w-screen min-h-[100px] bg-slate-700">
        <div className="w-9/12 mx-auto flex justify-between text-white">
        <div className="text-3xl text-white pt-6 leading-10">
            <span className="text-4xl font-bold">S</span>tudymitr
        </div>
            <Link  href="/regestration1">
                <div
                className="text-2xl  mt-6 border-2 border-slate-500 rounded-lg flex gap-2 justify-center
                 items-center p-3 hover:text-slate-400 transtion duration-200 ease-in"
                ><p>Regester Now</p> <FaArrowRight/></div>
            </Link>
        </div>
        
    </div>
            <div>
            <p className="text-3xl text-center">
            Home
            </p>
            </div>
            <Toaster/>
      </div>
  );
}


