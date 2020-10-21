import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GetWeatherData from './GetWeatherData.component';
 
interface data
{
    cityname?:any;
    countryname?:any;
    description?:any;
    mintemp?:any;
    maxtemp?:any;
    maintemp?:any;
    icons?:any;
}
 
const Weather = (props:any) =>{
 
    const minmaxTemp=(min:any,max:any)=>
    {
        if(min && max)
        return(
        <h3>min<span className="px-4">{min}&deg;</span>
            max<span className="px-4">{max}&deg;</span></h3>
        )
    }
 
    return (
        <div className="container py-3">
            <div className="cards">
                <h1>{props.cityname}</h1>
                <h5 className="py-4">
                  <FontAwesomeIcon icon={props.icons}/>
                </h5>
              {props.maintemp?(<h1 className="py-2">{props.maintemp}&deg;</h1>):null}
                 {/**show min max temperature */}
                {minmaxTemp(props.mintemp,props.maxtemp)}
                <h4 className="py-3">{props.description}</h4> 
            </div>
        </div>
    )
}
export default Weather;