// import { DateTime } from "luxon";

// const API_KEY = '481fd5b9e3d064687fb0323835b01641';

// const BASE_URL =`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}`;

// const getweatherdata = (infotype, searchparams) =>{
//     const url = new URL(BASE_URL + '/' + infotype);
//     url.search = new URLSearchParams({...searchparams, appid:API_KEY});

//     return fetch(url).then((res) =>res.json())
    
// };

// const formatCurrentWeather = (data)=>{
//     const {
//         coord: {lat , lon},
//         main:{temp,feels_like, temp_min, temp_max, humidity},
//         name,
//         dt,
//         sys:{contery, sunrise, sunset},
//         weather,
//         wind:{speed}
//     } = data

//     const {main:detailes, icon } = weather[0]

//     return {
//         lat, lon, temp, feels_like, temp_min, temp_max,
//         humidity, name, dt, contery, sunrise, sunset, detailes, icon, speed
//     };
// };
// const formatForecasWeather = (data) =>{
//     let{timezone, daily, hourly} = data;
//     // daily = daily.slice(1,6).map(d =>{
//     //     return{
//     //         title: formatTolocalTime(d.dt, timezone, 'ccc'),
//     //         temp : d.temp.day,
//     //         icon: d.weather[0].icon
//     //     }
//     // });
//     // hourly = hourly.slice(1,6).map(d =>{
//     //     return{
//     //         title: formatTolocalTime(d.dt, timezone, 'hh:mm a'),
//     //         temp : d.temp.day,
//     //         icon: d.weather[0].icon
//     //     }
//     // });

//     // return {timezone, daily, hourly};
// }
// const getFormattedWeatherData = async(searchparams) =>{
//     const formattedCurrentWeather = await getweatherdata('weather', searchparams)
//     .then(formatCurrentWeather);

//     const {lat, lon } = formattedCurrentWeather;

//     const formattedForcastWeather = await getweatherdata('onecall',{
//         lat,
//         lon,
//         exclude: 'current,minutely,alerts',
//         units: searchparams.units,
//     })
//     .then(formatForecasWeather)

//     return {...formattedCurrentWeather, ...formattedForcastWeather}
// };
// export const formatTolocalTime = (secs, zone, format = "cccc, dd lll yyyy' | local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

// export const iconUrlFormCode = (code) =>`http://openweathermap.org/img/wn/${code}@2x.png`

// export default getFormattedWeatherData;
// //  iconUrlFormCode ,formatTolocalTime 


