import Seemore from "./Seemore"
import { BsFillCaretDownFill } from "react-icons/bs"
import logo1 from '../img/medium/1.png'
import logo2 from '../img/medium/2.png'
import logo3 from '../img/medium/3.png'
import logo4 from '../img/medium/4.png'
import logo5 from '../img/medium/5.png'
import logo6 from '../img/medium/6.png'
import logo7 from '../img/medium/7.png'
import logo8 from '../img/medium/8.png'
import logo9 from '../img/medium/9.png'
import logo10 from '../img/medium/10.png'
import logo11 from '../img/medium/11.png'
import logo12 from '../img/medium/12.png'
import logo13 from '../img/medium/13.png'
import logo14 from '../img/medium/14.png'
import logo15 from '../img/medium/15.png'
import logo16 from '../img/medium/16.png'
import logo17 from '../img/medium/17.png'
import logo18 from '../img/medium/18.png'
import logo19 from '../img/medium/19.png'
import logo20 from '../img/medium/20.png'
import logo21 from '../img/medium/21.png'
import logo22 from '../img/medium/22.png'
import logo23 from '../img/medium/23.png'
import logo24 from '../img/medium/24.png'
import logo25 from'../img/medium/25.png'
import logo26 from'../img/medium/26.png'
import logo27 from'../img/medium/27.png'
import logo28 from'../img/medium/28.png'
import logo29 from'../img/medium/29.png'
import logo30 from'../img/medium/30.png'
import logo31 from'../img/medium/31.png'
import logo32 from'../img/medium/32.png'
import logo33 from'../img/medium/33.png'
import logo34 from'../img/medium/34.png'
import logo35 from  '../img/medium/35.png'
import logo36 from '../img/medium/36.png'
const Foracset = ({title,foracWeather, opendiv, setopendiv}) => {
    const icons = [logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,
                  logo16,logo17,logo18,logo19,logo20,logo21,logo22,logo23,logo24,logo25,logo26
                  ,logo27,logo28,logo29,logo30,logo31,logo32,logo33,logo34,logo35,logo36];

  const handelopendiv =  ()=>{
      setopendiv(true)
    }

  if (foracWeather =="") {
    return  <>
    <div className="loader-wrapper">
      <div className="loader"></div>
    </div>
  </>;
  }

  
  return (
    <div className='foracsets'>
      <div className="flex items-center justify-start mt-6 relative">
        <p className='text-white font-medium uppercase foracset'>
          {title}
        </p>
        {opendiv == false? <><div class="see-more" onClick={handelopendiv}>See More
        <span className="iconseemore"><BsFillCaretDownFill/></span></div></>:<></>
        }
      </div>
      <hr className='my-2' />


      <div className="">
        
      {
       opendiv == false?
       <>
       <div className="flex flex-row items-center justify-between text-white slider-hourly">
       <div className='flex flex-col items-center justify-center '>
          <p className='fint-light text-sm'>{foracWeather.hourly[1].date.slice(11) + " GMT"}</p>
          <img src={icons[foracWeather.hourly[1].icon - 1]}
           alt=""
           className='w-12 my-1' />
           <p className='font-medium'>{foracWeather.hourly[1].temperature}</p>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <p className='fint-light text-sm'>{foracWeather.hourly[2].date.slice(11)+ " GMT"}</p>
          <img src={icons[foracWeather.hourly[2].icon - 1]}
           alt=""
           className='w-12 my-1' />
           <p className='font-medium'>{foracWeather.hourly[2].temperature}</p>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <p className='fint-light text-sm'>{foracWeather.hourly[3].date.slice(11)+ " GMT"}</p>
          <img src={icons[foracWeather.hourly[3].icon - 1]}
           alt=""
           className='w-12 my-1' />
           <p className='font-medium'>{foracWeather.hourly[3].temperature}</p>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <p className='fint-light text-sm'>{foracWeather.hourly[4].date.slice(11)+ " GMT"}</p>
          <img src={icons[foracWeather.hourly[4].icon - 1]}
           alt=""
           className='w-12 my-1' />
           <p className='font-medium'>{foracWeather.hourly[4].temperature}</p>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <p className='fint-light text-sm'>{foracWeather.hourly[5].date.slice(11)+ " GMT"}</p>
          <img src={icons[foracWeather.hourly[5].icon - 1]}
           alt=""
           className='w-12 my-1' />
           <p className='font-medium'>{foracWeather.hourly[5].temperature}</p>
        </div>
       </div>
      
   
       </>:
        <div >
          <Seemore  foracWeather={foracWeather} setopendiv={setopendiv}/>
        </div> 
      }
       
       



      </div>
    </div>
  )
}

export default Foracset
