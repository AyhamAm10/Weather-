// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Topbottons from './componant/topbottons';
import Inputs from './componant/Inputs';
import Timeandlocation from './componant/Timeandlocation';
import Detailes from './componant/Detailes';
import Foracset from './componant/Foracset';
import { useEffect, useState } from 'react';
import ForacsetD from './componant/ForacsetD';

import Footer from './componant/Footer';


function App() {

  const [searchcity ,setsearchcity ] = useState('london');
  const [weatherData, setWeatherData] = useState();
  const [Error, setError]= useState();
  const [opendiv , setopendiv] = useState(false)
  const [yourcity, setyourcity]= useState('london');
  const [foracWeather, setforacWeather] = useState('');


  // fetch api to git foracset data
  
  useEffect(()=>{
      const key = "yezv6j2cupliborhmrkqwapbqwisdh7rhj1miru1";
      const city = "new york";
      const url_hourly = `https://www.meteosource.com/api/v1/free/point?place_id=${searchcity}&sections=all&timezone=UTC&language=en&units=metric&key=${key}`;
      const githourlydata = async()=>{
        fetch(url_hourly)
        .then(response => response.json())
        .then(data => {
          // الحصول على البيانات التنبؤية للطقس
          
          const forecastData = {
            hourly : data.hourly.data,
            daily : data.daily.data
          };
      
          // عرض البيانات التنبؤية للطقس
          setforacWeather(forecastData)
          console.log(foracWeather);
          console.log(forecastData);
        })
        .catch(error => {
          // عرض رسالة الخطأ في حالة حدوثه
          console.log(error);
        });
      }
      githourlydata()
      
    },[yourcity])
  
  // fetch data from open weathermap  wepsite to state weather just now 
  useEffect(()=>{
   const  gitdata =async()=>{
    const api_key = "481fd5b9e3d064687fb0323835b01641";
    const weather_api_url = `https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=${api_key}`;
    try {
      const response = await fetch(weather_api_url);
      const data = await response.json();
      console.log(data)
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
      console.log(Error)
    }
    
   }
   gitdata()

  },[yourcity])

  


  const handelsubmet = (e)=>{
    e.preventdefault()

  }
  
  if (Error) {
    return
    <>
    <Error errortitle={Error}/>
    </>;
  }
  if (!weatherData) {
    return 
    <>
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    </>;
  }

    const temperature = weatherData.main.temp;
    const feel = weatherData.main.feels_like;
    const reelFeel = Math.floor(feel-273.15);
    const Celsius = Math.floor(temperature - 273.15);
    const hight = Math.floor(weatherData.main.temp_max -273.15)
    const low = Math.floor(weatherData.main.temp_min -273.15)
    const city = weatherData.name;
    const country = weatherData.sys.country;
    const description = weatherData.weather[0].description;
    const logo = weatherData.weather[0].icon;
    const wind = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;
    console.log(weatherData.weather[0].description);
    const weatherimg = weatherData.weather[0].description
    const modifiedText = weatherimg.replace(/\s+/g, '-');
    console.log(modifiedText)
 
    return (
      <div className='mx-auto mx-w-screen-md mt-4 py-5 px-32  content'style={{backgroundImage:`url(${modifiedText}.jpg)`}} >
        <Topbottons setyourcity={setyourcity} setsearchcity={setsearchcity}/>
        <Inputs  setyourcity={setyourcity} setsearchcity={setsearchcity} searchcity={searchcity}yourcity={yourcity} />  
      {weatherData.name ?(
        
        <>
        <Timeandlocation city={city} country={country}/>
        <Detailes hight={hight} low={low} description={description} wind={wind} logo={logo} Celsius={Celsius} reelFeel={reelFeel} humidity={humidity}/>
        <Foracset title='hourly forecast' foracWeather={foracWeather} opendiv={opendiv} setopendiv={setopendiv} />
        <ForacsetD title='daily forecast' foracWeather={foracWeather} />
        <Footer/>
        </>
      ):(<>
      
    <>
    <Error errortitle={Error}/>
    </>;
      </>)}
        {/* <Timeandlocation city={city} country={country}/>
        <Detailes hight={hight} low={low} description={description} wind={wind} logo={logo} Celsius={Celsius} reelFeel={reelFeel} humidity={humidity}/>
        <Foracset title='hourly forecast' foracWeather={foracWeather} opendiv={opendiv} setopendiv={setopendiv} />
        <ForacsetD title='daily forecast' foracWeather={foracWeather} /> */}
      </div>
  );
}

export default App;
