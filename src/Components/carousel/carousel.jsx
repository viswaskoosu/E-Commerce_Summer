import React, { useState, useEffect, useRef } from "react";
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
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((image, i) => (
          <Box
            component="img"
            key={i}
            src={image}
            alt={`Slide ${i}`}
            sx={{
              width: "100%",
              flexShrink: 0,
              maxHeight: "60vh",
            }}
          />
        ))}
      </Box>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          zIndex: 3,
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
        onClick={handlePrev}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          zIndex: 3,
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
        onClick={handleNext}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
