import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  CardActions,
} from "@material-ui/core";
import useStyles from "./styles";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Rating from "@material-ui/lab/Rating";

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: "300px" }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography>Out of {place.num_reviews} reviews</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography variant="subtitle1">
            {place.price ? place.price : place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography variant="subtitle1" gutterBottom>
            {place.ranking}
          </Typography>
        </Box>
        {place.awards?.map((award, idx) => (
          <Box mb={0.5} className={classes.spacing} key={idx}>
            <img
              src={award.images.small}
              alt={award.display_name}
              className={classes.award_img}
            />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place.cuisine?.map(({ name }, idx) => (
          <Chip key={idx} size="small" label={name} className={classes.chip} />
        ))}

        {place.address && (
          <Box mb={0.5} className={classes.subtitle}>
            <LocationOnIcon />
            <Typography variant="body2" color="textSecondary">
              {place.address}
            </Typography>
          </Box>
        )}
        {place.phone && (
          <Box mb={0.5} className={classes.spacing}>
            <PhoneIcon />
            <Typography variant="body2" color="textSecondary">
              {place.phone}
            </Typography>
          </Box>
        )}

        <CardActions>
          <Button
            size="small"
            className={classes.btn}
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            className={classes.btn}
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
