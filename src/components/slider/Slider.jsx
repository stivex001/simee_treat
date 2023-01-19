import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { sliderData } from "./slider-data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Arrow = styled.div`
width: 50px;
height: 50Px;
background-color: #fff;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;

const Slider = () => {
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000


    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, [])
   
    function auto () {
        slideInterval =  setInterval(nextSlide, intervalTime)

    }

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval)
    })

  return (
    <Container>
      <Arrow onClick={prevSlide}>
        <ArrowLeft  />
      </Arrow>
      <Arrow onClick={nextSlide}>
        <ArrowRight />
      </Arrow>
      {sliderData.map((slide, index) => (
        <div key={index} className={index === currentSlide ? 'slide current' : 'slide'}>
            {index === currentSlide && (
                <>
                <img src={slide.image} alt={slide.heading} />
                <div className="content">
                    <h2>{slide.heading}</h2>
                    <p>{slide.desc}</p>
                    <hr />
                    <a href="#about">
                        Shop Now
                    </a>
                </div>
                </>
            )}
        </div>
      ))}
    </Container>
  );
};

export default Slider;
