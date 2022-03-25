import React from 'react'
import GoogleMapReact from 'google-map-react'
import useStyles from './styles'


const Map = ({coordinates,setCoordinates, setBounds}) => {
  const classes= useStyles()
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
      bootstrapURLKeys={{key:"AIzaSyCGWY_BCzJnXAKijrDI2Wc_s8mfOuO8Otg"}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50,50,50,50]}
      options={''}
      onChange={e=>{
        setCoordinates({lat: e.center.lat, lng: e.center.log})
        setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
    }}
      onChildClick={''}

      >
        
      </GoogleMapReact>
    </div>
  )
}

export default Map