import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import { useEffect } from "react";
import { sliderData } from "./slider-data";
import  './slider.scss'



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

//   function auto() {
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }

useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScroll]);


  return (
    <div className="slider">
      <ArrowLeft className="arrow prev" onClick={prevSlide} />
      <ArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className="content">
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <a href="#product" className="--btn --btn-primary">
                    Shop Now
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};


    // <Container>
    //   <Arrow direction="left" onClick={prevSlide}>
    //     <ArrowLeft />
    //   </Arrow>
    //   <Arrow direction="right" onClick={nextSlide}>
    //     <ArrowRight />
    //   </Arrow>
    //     {sliderData.map((slide, index) => (
    //       <Slide
    //         // bg={slide.bg}
    //         key={index}
    //         className={index === currentSlide && ' current' }
    //       >
    //         {index === currentSlide && (
    //           <>
    //             <ImgContainer>
    //               <Image src={slide.image} alt={slide.heading} />
    //             </ImgContainer>

    //             <InfoContainer> 
    //               <Title>{slide.heading}</Title>
    //               <Desc>{slide.desc}</Desc>
    //               <Button>SHOP NOW</Button>
    //             </InfoContainer>
    //           </>
    //         )}
    //       </Slide>
    //     ))}
    // </Container>

export default Slider;
