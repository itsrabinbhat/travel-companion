import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  award_img: {
    maxHeight: "25px",
  },
  chip: {
    margin: "5px 5px 5px 0",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  spacing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#079992",
    color: "#fff",
    padding: "3px 10px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#079992",
      opacity: "0.8",
    },
  },
}));
