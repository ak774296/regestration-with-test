"use client"
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import React from "react";

export default function Regestration_step2(){
    const [formData,setFormData]=React.useState({password:"",cpassword:""});
    const router=useRouter();
    function changeHandler(event:any){
        setFormData(
            (pre:any)=>{
              return{
                ...pre,[event.target.name]:event.target.value
              }
            }
          )
    }
    function nextHandler(){
      if(formData.password.length<=6){
        toast.error("Password length must be atleast 7");
        return;
      }
        else if(formData.password!=formData.cpassword){
            toast.error("Password Not matched");
            return;
        }
        else{
          router.push('/dashboard');
          toast.success("Regestered Succesfully");
        }
    }
    function prvHandler(){
      router.push('/regestration2');
    }
    return <div className="bg-black text-slate-800 w-screen min-h-[1200px] ">
        <div className="
        w-5/12 min-h-[300px]
        mx-auto border-2
        border-slate-300
        rounded-lg  bg-white flex flex-col gap-10">
        <div className="text-3xl text-center pt-4 pb-4 bg-blue-400">
            Regestration Step 2
        </div>
        <div>
        <form className="flex flex-col gap-2 text-xl ml-10 mr-10">
            
            <label htmlFor="password">Password: </label>
            <input 
            title="password"
            className="border-2  rounded-md"
            placeholder="Enter Password"
            type="password"
            required
            name="password"
            value={formData.password}
            onChange={changeHandler}
            />

              <label htmlFor="cpassword">confirm Password: </label>
            <input
            title="cpassword"
            className="border-2  rounded-md"
            placeholder="Confirm Password"
            required
            type="password"
            name="cpassword"
            value={formData.cpassword}
            onChange={changeHandler}
            />
        </form>
        </div>
        <div className="flex justify-between text-xl">
              <button
              title="prv"
              className="border-2 border-slate-400 p-[5px] mt-3 mb-3 
              rounded-lg w-[100px] mx-auto
              hover:bg-black hover:text-white 
              transtion duration-100 ease-in"
              onClick={prvHandler}>Pervious</button>

              <button 
              title="next"
              className="border-2 border-slate-400 p-[5px] mt-3 mb-3 
              rounded-lg w-[100px] mx-auto
              hover:bg-black hover:text-white 
              transtion duration-100 ease-in"
              onClick={nextHandler}>Next</button>
            </div>
        </div>
    </div>
}