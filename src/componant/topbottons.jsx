import React from 'react'

const Topbottons = ({setyourcity,setsearchcity}) => {
    const cities = [
        {
            id : '1',
            city : 'Aleppo'
        }, 
        {
            id : '2',
            city : 'Damascus'
        }, 
        {
            id : '3',
            city : 'Beirut'
        }, 
        {
            id : '4',
            city : 'latakia'
        }, 
        {
            id : '5',
            city : 'homs'
        },
    ]

    const handelclick = (key)=>{
        
      
      console.log(key)
      setsearchcity(key);
      setyourcity(key)
      console.log(key)


  }

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map(city =>(
        <button  key={city.id} onClick={()=>{handelclick(city.city)}} className='text-white text-lg font-medium'>{city.city}</button>
      ))}
    </div>
  )
}

export default Topbottons
