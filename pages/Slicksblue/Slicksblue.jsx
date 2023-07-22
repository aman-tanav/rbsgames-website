"user client"

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className='nextArrow sliksarrow' style={{ ...style, display: "block" }} onClick={onClick}>
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.6686 20.9175C32.2123 19.0385 32.2123 13.9615 28.6686 12.0825L7.59222 0.907416C4.2621 -0.858276 0.25 1.55562 0.25 5.32488V27.6751C0.25 31.4444 4.26211 33.8583 7.59223 32.0926L28.6686 20.9175Z" fill="#D9D9D9" />
      </svg>

    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div className='prevArrow sliksarrow' style={{ ...style, display: "block" }} onClick={onClick}>
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Polygon 1" d="M3.33137 20.9175C-0.212325 19.0385 -0.212316 13.9615 3.33138 12.0825L24.4078 0.907416C27.7379 -0.858276 31.75 1.55562 31.75 5.32488V27.6751C31.75 31.4444 27.7379 33.8583 24.4078 32.0926L3.33137 20.9175Z" fill="#D9D9D9" />
      </svg>

    </div>
  );
}


const Slicksblue = ({ customSettings = {} }) => {
  const settings = {
    dots: false,
    rrows: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className='bgGradient'>
      <div className='container'>
        <div className='row'>
          <div className="browse-inner-data">
            <h3>BECOME A TEAM MEMBER</h3>
            <p>Join the RBS Team and ignite your career in the cutting-edge world of Software Solutions
            </p>
          </div>
        </div>
      </div>
      <div className='sliderOutter slickGradient'>

        <Slider {...settings}>
          <div className='sliderImg'>
            <div className='imgOuuter'><img src='../assets/image/Shivam-1.png' alt="Map" /></div>
            <h4>SHIVAM MEHTA</h4>
            <p className="clientDetails">GAME DESIGNER / 3D ARTIST</p>
          </div>
          <div className='sliderImg'>
           <div className='imgOuuter'> <img src="../assets/image/manger.jpeg" alt="Image 2" /></div>
            <h4>HARJINDER SINGH</h4>
            <p className="clientDetails">GRAPHIC DESIGNER</p>

          </div>
          <div className='sliderImg'>
           <div className='imgOuuter'> <img src="../assets/image/music.jpeg" alt="Image 3" /></div>
            <h4>OBHI ROY</h4>
            <p className="clientDetails">MUSIC ARTIST</p>
          </div>
          <div className='sliderImg'>
           <div className='imgOuuter'> <img src='../assets/image/developer.jpeg' alt="Map" /></div>
            <h4>ANIL KUMAR</h4>
            <p className="clientDetails">GAME DEVELOPER</p>
          </div>
          <div className='sliderImg'>
           <div className='imgOuuter'> <img src='../assets/image/aman.jpg' alt="Map" /></div>
            <h4>AMANDEEP SINGH</h4>
            <p className="clientDetails">REACTJS DEVELOPER</p>
          </div>
         
         
           
          
        </Slider>


      </div>
    

    </div>

    </div>
  );
};

export default Slicksblue;
