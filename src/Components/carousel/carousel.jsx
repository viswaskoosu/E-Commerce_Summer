import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";

const images = [image1, image2, image3, image4, image5];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically scroll to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [index]); // Include index in the dependency array to reset the interval when the index changes

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%", // Set width to 100% of the viewport width
        overflowX: "hidden", // Hide horizontal scrollbar
        maxHeight: "60vh", // Set maximum height to 60% of the viewport height
        margin: 0, // Remove any margin
        padding: 0, // Remove any padding
      }}
    >
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        style={{ width: "100%", height: "auto" }}
      />
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: "1",
        }}
        onClick={handlePrev}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: "1",
        }}
        onClick={handleNext}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
