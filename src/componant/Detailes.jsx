import React from 'react'
import { WiStrongWind,WiDaySunny, WiThermometerExterior, WiHumidity,WiSunrise,WiSunset,WiDirectionUp,WiDirectionDown } from "react-icons/wi";
const Detailes = ({logo,hight, low, Celsius,description , reelFeel, wind, humidity}) => {
  return (
    <div className='detailes'>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>{description}</p>
        </div>
        <div className="flex flex-row items-center justify-between  text-white py-3">
            <img src = {`http://openweathermap.org/img/wn/${logo}@2x.png`}
             alt=""
             className='w-20'
             />
             <p className='text-5xl '>
                {Celsius}
             </p>
             <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <WiThermometerExterior size={18} className='mr-1'/>
                    real fell:
                    <span className='font-medium ml-1'>{reelFeel}</span>

                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <WiStrongWind size={18} className='mr-1'/>
                    wind speed:
                    <span className='font-medium ml-1'>{wind} km/h</span>

                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <WiHumidity size={18} className='mr-1'/>
                    Humidity:
                    <span className='font-medium ml-1'>{humidity}%</span>

                </div>
             </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3  all-datailessun'>
           <div className='flex detailessun'>
           <WiSunset/>
            <p className='font-light'>
                Rise: <span className='font-medium pl-1'>06:45 AM </span>
            </p>
            <p className='font-light'>|</p>
           </div>
           <div className='flex detailessun'>
           <WiSunrise/>
            <p className='font-light'>
                sit: <span className='font-medium pl-1'>06:45 AM </span>
            </p>
            <p className='font-light'>|</p>
           </div>
           <div className='flex px-50 detailessun'>
           <WiDirectionUp/>
            <p className='font-light'>
                Hight: <span className='font-medium pl-1'> {hight} </span>
            </p>
            <p className='font-light'>|</p>
           </div>
           <div className='flex detailessun'>
           <WiDirectionDown/>
            <p className='font-light'>
                low: <span className='font-medium pl-1'>{low} </span>
            </p>
           </div>
        </div>
    </div>
  )
}

export default Detailes
