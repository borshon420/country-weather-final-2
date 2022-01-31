import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface InitCountryInfo {
    capital: string[];
    population: number;
    latlng: number[];
    flags: {
        svg: string;
    }
}

interface InitWeatherInfo {
    temperature: number;
    weather_icons: string[];
    wind_speed: number;
    precip: number;
}

const CountryInfo: React.FC = () => {
    const {state} = useLocation();
    const name = state;

    const [country, setCountry] = useState<InitCountryInfo>();
    const [weather, setWeather] = useState<InitWeatherInfo>();

    useEffect(()=> {
        getCountry();
    },[])

    const getCountry = async() => {
        try{
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const data = await res.json();
            setCountry(data[0]);
        }catch(error){
            console.log(error);
        }
    }

    const getWeather = async() => {
        try{
            const res = await fetch(`http://api.weatherstack.com/current?access_key=09276fa6e73a3c0e88013b6416c64880&query=${country?.capital[0]}`)
            const data = await res.json();
            setWeather(data.current);
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div data-testid="country">
            <h2>This is country info</h2>
            <div>
                <div>
                    <p>Capital: {country?.capital[0]}</p>
                    <p>population: {country?.population}</p>
                    <p>Latitude: {country?.latlng[0]}<sup>o</sup></p>
                    <p>Longitude: {country?.latlng[1]}<sup>o</sup></p>
                    <img style={{width: "25%"}} src={country?.flags.svg} alt="" />
                </div>
                <Button onClick={getWeather} variant="contained">Capital Weather</Button>
            </div>
            {weather && <div>
                <p>Temperature: {weather?.temperature}<sup>o</sup></p>
                <p>Wind_Speed: {weather?.wind_speed}<sup>o</sup></p>
                <p>Precip: {weather?.precip}<sup>o</sup></p>
                <img src={weather?.weather_icons[0]} alt="" />
            </div>}
        </div>
    );
};

export default CountryInfo;