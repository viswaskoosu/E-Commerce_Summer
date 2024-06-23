import React, { useEffect } from "react";
import { useStateValue } from "../../Context/StateProvider";
import "./ContactInfo.css"; // Import the CSS file
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Paper, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ContactInfo() {
  const [{ user, userLoggedIn }] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/error");
    }
  }, [userLoggedIn, navigate]);

  if (!userLoggedIn) {
    return null; // or a loading spinner, or any fallback UI
  }

  return (
    <>
      <Header />
      <div className="contactInfo">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          style={{ fontFamily: "Poppins" }}
        >
          Welcome, {user.displayName}!
        </Typography>
        <Paper elevation={3} className="infoContainer">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            style={{ fontFamily: "Poppins", color: "#333" }}
          >
            Contact Information
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={1}>
              <EmailIcon style={{ fontSize: 28, color: "#666" }} />
            </Grid>
            <Grid item xs={11}>
              <Typography
                variant="body1"
                style={{ fontFamily: "Poppins", fontSize: 18 }}
              >
                <strong>Email:</strong> {user.email}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <PhoneIcon style={{ fontSize: 28, color: "#666" }} />
            </Grid>
            <Grid item xs={11}>
              <Typography
                variant="body1"
                style={{ fontFamily: "Poppins", fontSize: 18 }}
              >
                <strong>Phone Number:</strong>{" "}
                {user.phone ? `${user.phone}` : "Not provided"}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <LocationOnIcon style={{ fontSize: 28, color: "#666" }} />
            </Grid>
            <Grid item xs={11}>
              <Typography
                variant="body1"
                style={{ fontFamily: "Poppins", fontSize: 18 }}
              >
                <strong>Address:</strong>{" "}
                {user.addresses.length !== 0
                  ? user.currentAddress !== -1
                    ? `${user.addresses[user.currentAddress].street}, ${user.addresses[user.currentAddress].city}, ${user.addresses[user.currentAddress].state}, ${user.addresses[user.currentAddress].zip}, ${user.addresses[user.currentAddress].country}`
                    : "Select Address"
                  : "Not provided"}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

export default ContactInfo;
