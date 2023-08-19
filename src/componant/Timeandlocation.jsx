import React from 'react'
import { formatTolocalTime } from '../server/weatherservice'

const Timeandlocation = ({city, country}) => {
  return (
    <div className="Timeandlocation">
      <div className="flex items-center justify-center my-6">
        <p className='text-white text-xl font-extralight'>
           {/* {console.log(formatTolocalTime())} */}
        </p>
      </div>
      <div className='flex items-center justify-center my-3 '>
        <div className='text-white text-3xl font-medium '>
            <p>{city}{country}</p>
        </div>

      </div>
    </div>
  )
}

export default Timeandlocation
