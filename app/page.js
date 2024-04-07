"use client"; /* Puts load on client side, not server side. */

import { useState, useEffect } from 'react';

import ButtonDemo from '../components/ButtonDemo';
import ColorPicker from "../components/ColorPicker";
import PeoplePicker from "../components/PeoplePicker"

import { getPeople, getWeatherData, getGeoLocation, getWeatherDataByLatLon } from "../lib/api";

import Image from 'next/image';

const Homepage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const peopleArr = getPeople();

  /* If null element is provided to dependency list, then effect triggers automatically on startup */
  useEffect(() => {
    getGeoLocation()
      .then((position) => {
        console.log(position);
        setLocation(position);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error);
      });
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWeatherDataByLatLon(location);
      setWeatherData(response);
    };
    /* we declare fetch above---but that doesn't mean we run it! Still need to call directly below. */
    location ? fetchData() : null; /* we have to wait for location to hold something before executing fetch---or errors!. */
  }, [location]);

  /* For useEffect, supply a function, declare an asynchronous function within, and execute that function, which updates weatherData. Set the side-effect array to weatherData */
  /*   useEffect(() => {
      const fetchData = async () => {
        const response = await getWeatherData();
        setWeatherData(response);
      };
      fetchData();
    }, [weatherData]); */

  return (
    <div>
      <h1>Weather app</h1>
      {errorMessage && <div>{errorMessage}</div>}
      {/* Wait until weatherData exists before showing div! */}
      {weatherData && <div>
        <h2>{weatherData.city.name}</h2>
        <p>Current temp: {weatherData.list[0].main.temp}&deg; F</p>
        <p>{weatherData.list[0].weather[0].description}</p>
        <Image
          src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
          alt={`Weather icon`}
          width={100}
          height={100} />
      </div>}

      {/*       <PeoplePicker people={peopleArr} />
      <ButtonDemo />
      <ColorPicker /> */}
    </div >
  );
};

export default Homepage;