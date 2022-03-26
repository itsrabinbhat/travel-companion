import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setClickedChild,
}) => {
  const screenSize = useMediaQuery("(min-width: 600px)");
  const classes = useStyles();
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCGWY_BCzJnXAKijrDI2Wc_s8mfOuO8Otg" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.log });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setClickedChild(child)}
      >
        {places?.map((place, idx) => (
          <div
            key={idx}
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            {screenSize ? (
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80"
                  }
                  alt={place.name}
                  className={classes.pointer}
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            ) : (
              <LocationOnOutlinedIcon
                fontSize="large"
                style={{ color: "#079992" }}
              />
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
