import React, { useState } from 'react'
import {FormControl, Typography, InputLabel, Select, MenuItem, Grid} from "@material-ui/core"
import useStyles from "./styles"
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = ({places}) => {
  const [type, setType]=useState('restaurants')
  const [rating, setRating]=useState('')
  const classes= useStyles()

  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurants, Hotels & Attractions Around You!</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type:</InputLabel>
        <Select value={type} onChange={(e)=> setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating:</InputLabel>
        <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>

        </Select>
      </FormControl>

      <Grid container className={classes.list} spacing={3}>

        {places?.map((place, idx)=>(
          <Grid item key={idx} xs={12}>
            <PlaceDetails place={place}/>
          </Grid>
        ))}


      </Grid>
    </div>
  )
}

export default List