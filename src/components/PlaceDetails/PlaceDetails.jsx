import React from 'react'
import {Card, CardMedia, CardContent, Typography} from "@material-ui/core"

const PlaceDetails = ({place}) => {
  console.log(place)
  return (
    <Card elevation={3}>
      <CardMedia
        style={{height:"300px"}}
        image={place.photo ? place.photo.images.large.url: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80"}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name}</Typography>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails