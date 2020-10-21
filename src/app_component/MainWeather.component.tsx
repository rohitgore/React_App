import React, { useEffect } from 'react';
// import './App.scss';
import Weather from './Weather.component';
import { faCoffee,faCloudRain,faCloudSunRain,faCloudShowersHeavy, faCloud,faPooStorm,faShower,faSnowflake,faSun,faWater} from '@fortawesome/free-solid-svg-icons';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import GetWeatherData from './GetWeatherData.component';
const API_Key = "83d9420e68892320ae0f1b0b567d9c56";
 
library.add(faCoffee,faCloudRain,faCloudSunRain,faCloud,faPooStorm,faShower,faCloudRain,faCloudShowersHeavy,faSnowflake,faWater)
 
function MainWeather() 
{
  // document.body.style.backgroundColor="yellow";
  const backgroundChange = (id:any) =>
  {
    console.log(id);
    switch (true)
     {
      case id >= 200 && id <= 232:
        document.body.style.backgroundImage="url('thunderstorm.jpg')"; break;
      case id >= 300 && id <= 321:
        document.body.style.backgroundImage="url('drizzle.jpg')"; break;
      case id >= 500 && id <= 531:
        document.body.style.backgroundImage="url('rain.jpg')"; break;
      case id >= 600 && id <= 622:
        document.body.style.backgroundImage="url('snow.jpg')"; break;
      case id >= 701 && id <= 781:
        document.body.style.backgroundImage="url('atmosphere.jpg')"; break; 
      case id == 800:
        document.body.style.backgroundImage="url('clear.jpg')"; break;
      case id >= 801 && id <= 804:
        document.body.style.backgroundImage="url('cloud.jpg')"; break;
      default:
        document.body.style.backgroundImage="url('atmosphere.jpg')"; break;  
     }
    }
  return (
    <div className="App">
       <GetWeatherData loaddata = {backgroundChange}></GetWeatherData>
    </div>
  );
}
 
export default MainWeather;