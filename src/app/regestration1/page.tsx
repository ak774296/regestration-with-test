"use client"
import React from "react";
import { useRouter } from 'next/navigation';

export default function Regestration_step1(){
    const router = useRouter();
    const [formData,setFormData]=React.useState({firstName:"",middleName:"",
    lastName:"",email:""});
    function changeHandler(event:any){
        setFormData(
            (pre:any)=>{
              return{
                ...pre,[event.target.name]:event.target.value
              }
            }
          )
    }
    function submitHandler(event:any){
      event.preventDefault();
      router.push('/regestration2');
     
    }
    return <div className="bg-black text-slate-800 w-screen min-h-[1200px] ">
        <div className="
        w-5/12 min-h-[400px]
        mx-auto border-2
        border-slate-300
        rounded-lg  bg-white flex flex-col gap-10">
        <div className="text-3xl text-center pt-4 pb-4 bg-blue-400">
            Regestration Step 1
        </div>
        <div>
        <form  className="flex flex-col gap-2 text-xl ml-10 mr-10 " 
        title="reges-form1"
        onSubmit={submitHandler}>
            <label htmlFor="firstName">First Name: </label>
            <input 
            title="firstName"
            className="border-2  rounded-md"
            placeholder="Enter your first name"
            type="text"
            required
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            />
              <label htmlFor="middleName">Middle Name: </label>
            <input
            title="middleName"
            className="border-2  rounded-md"
            placeholder="Enter your middle name"
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={changeHandler}
            />
            <label htmlFor="lastName">Last Name: </label>
            <input
            title="lastName"
            className="border-2  rounded-md"
            placeholder="Enter your last name"
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={changeHandler}
            />
               <label htmlFor="email">Email id: </label>
            <input
            title="email"
            className="border-2  rounded-md"
            placeholder="Enter your email id"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={changeHandler}
            />
            <button
            type="submit"
            className="border-2 border-slate-400 p-[5px] mt-3 mb-3 
            rounded-lg w-[100px] mx-auto
            hover:bg-black hover:text-white 
            transtion duration-100 ease-in">Next</button>
        </form>
        </div>
        </div>
    </div>
}