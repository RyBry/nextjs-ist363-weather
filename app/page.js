"use client"; /* Puts load on client side, not server side. */

// core modules
import { useState, useEffect } from 'react';

// nextJS components
import Image from 'next/image';

// custom components
import Col from "../components/Col";
import Row from "../components/Row";
import List from "../components/List";
import Tabs from "../components/Tabs";
import Container from "../components/Container";
import Temp from "../components/Temp";

import {
  getGeoLocation,
  getWeatherDataByLatLon
} from "../lib/api";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [daysOfWeek, setDaysOfWeek] = useState(null);
  const [activeDayIndex, setActiveDayIndex] = useState(0);

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
      setLoading(false);
    };
    /* we declare fetch above---but that doesn't mean we run it! Still need to call directly below. */
    location ? fetchData() : null; /* we have to wait for location to hold something before executing fetch---or errors!. */
  }, [location]);

  useEffect(() => {
    const tempWeek = [];
    // filter out days of the week. "block" is the name of our weather import data for each particular loop.
    weatherData && weatherData.list.filter((block) => {
      const date = new Date(block.dt * 1000); // multiply by 1000 to get to ms (because javascript interpets in milliseconds)
      const options = { weekday: "short" }
      const day = date.toLocaleDateString("en-US", options);
      //console.log(day);
      if (!tempWeek.includes(day)) {
        tempWeek.push(day);
      }
    });
    setDaysOfWeek(tempWeek);
    // then set state with the das of the week
  }, [weatherData])

  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      {/* Wait until weatherData exists before showing div! */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Container>
          <Row>
            <Col sm={3} md={4} lg={6}>
              <h2>{weatherData.city.name}</h2>
              <Temp size="xl" amount={weatherData.list[0].main.temp} />
              <p>{weatherData.list[0].weather[0].description}</p>
              <Image
                src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
                alt={`Weather icon`}
                width={100}
                height={100} />
            </Col>
            <Col sm={9} md={8} lg={6}>
              {weatherData && daysOfWeek && (
                <section>
                  <Tabs
                    items={daysOfWeek}
                    clickHandler={setActiveDayIndex}
                    activeIndex={activeDayIndex}
                  />
                  <List
                    activeIndex={activeDayIndex}
                    items={weatherData?.list}
                    daysOfWeek={daysOfWeek}
                  />
                </section>)}
            </Col>
          </Row>
        </Container>)}
    </div>
  );
};

export default Homepage;