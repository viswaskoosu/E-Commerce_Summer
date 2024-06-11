import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";
import "./Carousel.css"; // Import the CSS file

const images = [image1, image2, image3, image4, image5];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const timeoutRef = useRef(null);

  const handlePrev = () => {
    if (!isSliding) {
      setIsSliding(true);
      setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
  };

  const handleNext = () => {
    if (!isSliding) {
      setIsSliding(true);
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  useEffect(() => {
    const startAutoSlide = () => {
      timeoutRef.current = setTimeout(() => {
        handleNext();
      }, 3000);
    };

    if (!isSliding) {
      startAutoSlide();
    }

    return () => clearTimeout(timeoutRef.current);
  }, [index, isSliding]);

  useEffect(() => {
    if (isSliding) {
      const timer = setTimeout(() => {
        setIsSliding(false);
      }, 500); // Match the duration of the animation

      return () => clearTimeout(timer);
    }
  }, [isSliding]);

  return (
    <Box className="carousel-container">
      <Box
        className="carousel-wrapper"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((image, i) => (
          <Box
            component="img"
            key={i}
            src={image}
            alt={`Slide ${i}`}
            className="carousel-image"
          />
        ))}
      </Box>
      <IconButton className="carousel-button prev-button" onClick={handlePrev}>
        <ArrowBackIos />
      </IconButton>
      <IconButton className="carousel-button next-button" onClick={handleNext}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
