"user client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Slicks = ({ customSettings = {} }) => {
  const settings = {
    dots:true,
   centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  ...customSettings,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  };



  return (
    <div>

    <div className='transformTtl'>
      <div className='container'>
        <div className='row'>
        <div className="browse-inner-data">
             <div className='titleLine'>
              <h3>TRANSFORMING IDEAS INTO DIGITAL REALITIES</h3>
             </div>
              <p>Unlock limitless potential with RBS- Your one-stop solutions for all your software needs
              </p>
            </div>
        </div>
      </div>
      <div className='sliderOutter'>
      
        <Slider {...settings}>
        <div className='sliderImg'>
        <img src='../assets/image/01.png' alt="Map" />
          <h4>Project Name</h4>
        </div>
        <div className='sliderImg'>
          <img src="../assets/image/02.png" alt="Image 2" />
           <h4>Project Name</h4>
        </div>
        <div className='sliderImg'>
          <img src="../assets/image/03.png" alt="Image 3" />
           <h4>Project Name</h4>
        </div>
        <div className='sliderImg'>
        <img src='../assets/image/01.png' alt="Map" />
         <h4>Project Name</h4>
        </div>
        <div className='sliderImg'>
          <img src="../assets/image/02.png" alt="Image 2" />
           <h4>Project Name</h4>
        </div>
        <div className='sliderImg'>
          <img src="../assets/image/03.png" alt="Image 3" />
           <h4>Project Name</h4>
        </div>
        <div className='sliderImg'>
          <img src="../assets/image/02.png" alt="Image 3" />
           <h4>Project Name</h4>
        </div>
      </Slider>

      <div className='rangeOutter'>
      <input type="range" min="1" max="100" value="50" className="rangMain" id="myRange" />
      </div>
      </div>
    </div>

    </div>
  );
};

export default Slicks;
