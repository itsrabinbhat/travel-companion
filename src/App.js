import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData, getWeatherData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import useTitle from "./hooks/useTitle";

const App = () => {
  useTitle("Travel Companion");
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  const [clickedChild, setClickedChild] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [autoComplete, setAutoComplete] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const _filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(_filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data.filter((place) => place.name));
        setFilteredPlaces([]);
        setRating("");
        setIsLoading(false);
      });

      getWeatherData(coordinates.lat, coordinates.lat).then((data) =>
        setWeatherData(data)
      );
    }
  }, [type, bounds]);

  const onLoad = (autoC) => {
    setAutoComplete(autoC);
    console.log(autoC);
  };

  const onPlaceChanged = () => {
    const lng = autoComplete.getPlace().geometry.location.lng();
    const lat = autoComplete.getPlace().geometry.location.lat();

    setCoordinates({ lat, lng });
  };

  return (
    <>
      <CssBaseline>
        <Header />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <List
              places={filteredPlaces.length ? filteredPlaces : places}
              isLoading={isLoading}
              clickedChild={clickedChild}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              places={filteredPlaces.length ? filteredPlaces : places}
              setClickedChild={setClickedChild}
              onLoado={onLoad}
              onPlaceChanged={onPlaceChanged}
              weatherData={weatherData}
            />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default App;
