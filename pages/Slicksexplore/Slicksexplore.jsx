import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className='nextCircle sliksarrow' style={{ ...style, display: "block" }} onClick={onClick}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          // clip-rule="evenodd" 
          d="M30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60ZM22.8122 17.2902C21.5474 16.2199 21.3896 14.327 22.4598 13.0622C23.5301 11.7974 25.423 11.6396 26.6878 12.7098L42.6956 26.2549C45.2073 28.38
         45.0171 32.31 42.312 34.1828L26.4576 45.1589C25.0954 46.102 23.2265 45.7622 22.2834 44.3999C21.3403 43.0377 21.6801 41.1688 23.0424 40.2257L37.8239 29.9924L22.8122 17.2902Z" fill="white" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div className='prevCircle sliksarrow' style={{ ...style, display: "block" }} onClick={onClick}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
        //  clip-rule="evenodd" 
         d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM37.1878 17.2902C38.4526 16.2199 38.6104 14.327 37.5402 13.0622C36.4699 11.7974 34.577 11.6396 33.3122 12.7098L17.3044 26.2549C14.7927 28.3801 14.9829 32.31 17.688 34.1828L33.5424 45.1589C34.9046 46.102 36.7735 45.7622 37.7166 44.3999C38.6597 43.0377 38.3199 41.1688 36.9576 40.2257L22.1761 29.9924L37.1878 17.2902Z" fill="white" />
      </svg>
    </div>
  );
}

const Slicksblue = ({ customSettings = {} }) => {
  const settings = {
    dots: false,
    arrows: true,
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
    <div className='exploreBg'>
      <div className='container'>
        <div className='row'>
          <div className="titleCenter">
            <h2>EXPLORE OUR CAREER <br /> OPPORTUNITIES</h2>
          </div>
        </div>
      </div>
      <div className='sliderOutter expCard'>
        <Slider {...settings}>
          <div className='expCardImg'>
            <div className='expCardImgIn'>
              <h5>SENIOR 2D ARTIST</h5>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Department.png' className='icon' />
                </span>
                <h3>PRODUCT MANAGEMENT</h3>
              </div>
            </div>
            <div className='expCardImgIn'>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Location.png' className='icon' />
                </span>
                <h3>Chandigarh, India</h3>
              </div>
            </div>
            <div className='expCardImgIn'>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Clock.png' className='icon' />
                </span>
                <h3>Permanent contract</h3>
              </div>
            </div>

            <a href='#' className='cardBtn'>Apply now</a>
          </div>
          <div className='expCardImg'>
            <div className='expCardImgIn'>
              <h5>SENIOR 2D ARTIST</h5>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Department.png' className='icon' />
                </span>
                <h3>PRODUCT MANAGEMENT</h3>
              </div>
            </div>
            <div className='expCardImgIn'>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Location.png' className='icon' />
                </span>
                <h3>Chandigarh, India</h3>
              </div>
            </div>
            <div className='expCardImgIn'>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Clock.png' className='icon' />
                </span>
                <h3>Permanent contract</h3>
              </div>
            </div>

            <a href='#' className='cardBtn'>Apply now</a>
          </div>
          <div className='expCardImg'>
            <div className='expCardImgIn'>
              <h5>SENIOR 2D ARTIST</h5>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Department.png' className='icon' />
                </span>
                <h3>PRODUCT MANAGEMENT</h3>
              </div>
            </div>
            <div className='expCardImgIn'>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Location.png' className='icon' />
                </span>
                <h3>Chandigarh, India</h3>
              </div>
            </div>
            <div className='expCardImgIn'>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Clock.png' className='icon' />
                </span>
                <h3>Permanent contract</h3>
              </div>
            </div>

            <a href='#' className='cardBtn'>Apply now</a>
          </div>
          <div className='expCardImg'>
            <div className='expCardImgIn'>
              <h5>SENIOR 2D ARTIST</h5>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Department.png' className='icon' />
                </span>
                <h3>PRODUCT MANAGEMENT</h3>
              </div>
            </div>
            <div className='expCardImgIn'>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Location.png' className='icon' />
                </span>
                <h3>Chandigarh, India</h3>
              </div>
            </div>
            <div className='expCardImgIn'>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Clock.png' className='icon' />
                </span>
                <h3>Permanent contract</h3>
              </div>
            </div>

            <a href='#' className='cardBtn'>Apply now</a>
          </div>
          <div className='expCardImg'>
            <div className='expCardImgIn'>
              <h5>SENIOR 2D ARTIST</h5>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Department.png' className='icon' />
                </span>
                <h3>PRODUCT MANAGEMENT</h3>
              </div>
            </div>
            <div className='expCardImgIn'>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Location.png' className='icon' />
                </span>
                <h3>Chandigarh, India</h3>
              </div>
            </div>
            <div className='expCardImgIn'>
              <div className='iconText'>
                <span>
                  <img src='../assets/image/Clock.png' className='icon' />
                </span>
                <h3>Permanent contract</h3>
              </div>
            </div>

            <a href='#' className='cardBtn'>Apply now</a>
          </div>
          
        </Slider>
      </div>
    </div>
  );
};

export default Slicksblue;
