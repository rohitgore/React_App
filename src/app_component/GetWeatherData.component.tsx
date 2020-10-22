import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InputForm from './InputForm.component';
import Weather from './Weather.component';
const API_Key = "83d9420e68892320ae0f1b0b567d9c56";

const GetWeatherData = (props: any) => {
    const [city, setcity] = useState('');
    const [country, setcountry] = useState('');
    const [weatherDescription, setweatherDescription] = useState('');
    const [icon, seticon] = useState('');
    const [temp_max, settemp_max] = useState(0);
    const [temp_min, settemp_min] = useState(0);
    const [celcious, setcelcious] = useState(0);
    const [error, seterror] = useState('');
    const [image, setimage] = useState('')

    const weathericon = {
        Thunderstorm: "poo-storm",
        Drizzle: "CloudShowersHeavy",
        Rain: "cloud-rain",
        Snow: "snowflake",
        Atmosphere: "water",
        Clear: "sun",
        Cloud: "cloud"
    }

    const weatherimage = {
        rain: "http://img.talkandroid.com/uploads/2014/06/Android-rain.jpg"
    }

    //Calculate celcious Temprature
    const celcioustemp = (current_temp: any) => {
        let cell = Math.floor(current_temp - 273.15);
        return cell;
    }

    //useEffect call get data after component render
    useEffect(() => {
        getDefaultData();
    }, [])

    //Get Weather Icon on Condition
    const getWeatherIcon = (icon: any, rangeid: any) => {
        switch (true) {
            case rangeid >= 200 && rangeid <= 232:
                seticon(icon => weathericon.Atmosphere);
            case rangeid >= 300 && rangeid <= 321:
                seticon(icon => weathericon.Drizzle); break;
            case rangeid >= 500 && rangeid <= 531:
                seticon(icon => weathericon.Rain); break;
            case rangeid >= 600 && rangeid <= 622:
                seticon(icon => weathericon.Snow); break;
            case rangeid >= 701 && rangeid <= 781:
                seticon(icon => weathericon.Atmosphere); break;
            case rangeid == 800:
                seticon(icon => weathericon.Clear); break;
            case rangeid >= 801 && rangeid <= 804:
                seticon(icon => weathericon.Cloud); break;
            default:
                seticon(icon => weathericon.Cloud);
        }
    }
    //Get Default weather data

    const getDefaultData = () =>
    {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Mumbai,IN&appid=${API_Key}`)
        .then(res=>{setcity(city => `${res.data.name},${res.data.sys.country}`);
        setcountry(country => res.data.sys.country);
        setweatherDescription(weatherDescription => res.data.weather[0].description);
        setcelcious(celcious => celcioustemp(res.data.main.temp));
        settemp_min(temp_min => celcioustemp(res.data.main.temp_min));
        settemp_max(temp_max => celcioustemp(res.data.main.temp_max));
        getWeatherIcon(weathericon, res.data.weather[0].id);
        props.loaddata(res.data.weather[0].id);
        console.log(res);})
        .catch(err=>console.log(err))
    }
    //Get Data From Weather API

    const getweatherData = (e: any) => {
        e.preventDefault();

        const citynm = e.target.city.value;
        const countrynm = e.target.country.value;
        if (citynm && countrynm) {

            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citynm},${countrynm}&appid=${API_Key}`).
                then(res => {
                    setcity(city => `${res.data.name},${res.data.sys.country}`);
                    setcountry(country => res.data.sys.country);
                    setweatherDescription(weatherDescription => res.data.weather[0].description);
                    setcelcious(celcious => celcioustemp(res.data.main.temp));
                    settemp_min(temp_min => celcioustemp(res.data.main.temp_min));
                    settemp_max(temp_max => celcioustemp(res.data.main.temp_max));
                    getWeatherIcon(weathericon, res.data.weather[0].id);
                    console.log(res);
                    props.loaddata(res.data.weather[0].id);
                    seterror(err => '');

                })
                .catch(err => console.log(err))
        }
        else {

            // alert("enter the values");
            seterror(err => 'true');
        }

    }
    return (
        <div>
            <InputForm loadweather={getweatherData} error={error}></InputForm>
            <Weather cityname={city} countryname={country} description={weatherDescription}
                maintemp={celcious} mintemp={temp_min} maxtemp={temp_max} icons={icon}></Weather>
        </div>
    )
}

export default GetWeatherData;