import React, { useEffect, useState, createRef } from "react";
import {
  FormControl,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({
  places,
  isLoading,
  clickedChild,
  type,
  setType,
  rating,
  setRating,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) => {
      return Array(places.length)
        .fill()
        .map((_, idx) => refs[idx] || createRef());
    });
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions Around You!
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type:</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating:</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="3rem" color="inherit" />
        </div>
      ) : (
        <Grid container className={classes.list} spacing={3}>
          {places.length > 0 ? (
            places.map((place, idx) => (
              <Grid item ref={elRefs[idx]} key={idx} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(clickedChild) === idx}
                  refProp={elRefs[idx]}
                />
              </Grid>
            ))
          ) : (
            <Typography>0 results found😔</Typography>
          )}
        </Grid>
      )}
    </div>
  );
};

export default List;
