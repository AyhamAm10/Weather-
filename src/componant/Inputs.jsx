import React, { useState } from 'react'
import { cityjson } from '../server/cuntry';
import {VscSearch , VscLocation } from "react-icons/vsc";


const Inputs = ({setsearchcity, setyourcity , searchcity,yourcity, style}) => {
    const [searchitemscity,setsearchitemscity] =useState(null);
    const [valueinput, setvalueinput] = useState(null);
    const handelclicked = (ele)=>{
        console.log(ele);
        setsearchcity(ele);
    }
    const handelsearch = (e)=>{
        setsearchcity(e.target.value);
        const searchTerm = e.target.value.toLowerCase();
        const SuggestedCities =allcity.filter(city=> city.toLowerCase().includes(searchTerm))
        setsearchitemscity(SuggestedCities);
        if(SuggestedCities.length>2){
            const Suggestedcities = SuggestedCities.slice(0,1);
            setsearchitemscity(Suggestedcities);

        }
        console.log(searchitemscity);
    }
    const handelclick = (key)=>{
        
      
        console.log(key)
        setsearchcity(key);
        setyourcity(key)
        console.log(key)


    }
let allcity = [];
    const addcity = Object.keys(cityjson).map(key => cityjson[key]);
    addcity.map(ele =>{
       ele.map(item=>{
        allcity.push(item)
       })
    })
   console.log(allcity);
  return (
    <div className='input'>

        <div className='flex flex-row justify-center my-6'>
            <div className="flex flex-row items-center w-3/4 space-x-4 justify-center">
                <form onSubmit={(e)=>{e.preventDefault();
                setyourcity(searchcity);
                console.log(yourcity)
                }} >
                <input type="text" 
                style={style}
                onChange={handelsearch}
                placeholder='search...'
                value={valueinput}
                onClick={()=>{setvalueinput(null)}} 
                className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
                 />
                 <div className='listcity flex flex-col justify-between '>
                 {
                    searchitemscity?searchitemscity.map(ele=>(
                        <label key={ele}  className='py-1 my-1 text-center border' onClick={()=>{handelclick(ele)}} >{ele}</label>
                    )):(<></>)
                 }
                 </div>
                </form>
              
                <VscSearch onClick={console.log("yourcity")} size={25} className='text-white cursor-pointer translate ease-out hover:scale-125'/>
                <VscLocation size={25} className='text-white cursor-pointer translate ease-out hover:scale-125'/>
                <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name='matrice'
                className='text-xl text-white font-light'
                >
                    C
                </button>
                <p className='text-xl text-white mx-1'>|</p>
                <button name='imperial'
                className='text-xl text-white font-light'
                >
                    F
                </button>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Inputs
