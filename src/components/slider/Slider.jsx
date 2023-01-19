import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import { useEffect } from "react";
import { sliderData } from "./slider-data";
import { Arrow, Button, Container, Desc, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper } from "./slider.styles";



const Slider = () => {
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  });

  return (
    <Container>
      <Arrow direction="left" onClick={prevSlide}>
        <ArrowLeft />
      </Arrow>
      <Arrow direction="right" onClick={nextSlide}>
        <ArrowRight />
      </Arrow>
      <Wrapper>
        {sliderData.map((slide, index) => (
          <Slide
            bg={slide.bg}
            key={index}
          >
            {index === currentSlide && (
              <>
                <ImgContainer>
                  <Image src={slide.image} alt={slide.heading} />
                </ImgContainer>

                <InfoContainer> 
                  <Title>{slide.heading}</Title>
                  <Desc>{slide.desc}</Desc>
                  <Button>SHOP NOW</Button>
                </InfoContainer>
              </>
            )}
          </Slide>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Slider;
