import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const OurCustomer = ({ customSettings = {} }) => {
  const settings = {
    dots: true,
    slidesToShow: 6,
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
      <div className='ourCustOutter'>
        <div className='container'>
          <div className='row'>
            <div className="browse-inner-data">
              <h3>OUR CUSTOMERS</h3>
              <p>Join our growing list of happy customers by experiencing the RBS Difference</p>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='sliderOutter ourCustom'>
              <Slider {...settings}>
                <div className='sliderBlock'>
                  <div className='sliderImg'>
                    <img src='../assets/image/images-1.png' alt="Map" />
                  </div>
                  <div className='sliderImg'>
                    <img src='../assets/image/P-amazing-3D-logo-design-concept-in-20211 1.png' alt="Image 3" />
                  </div>
                </div>

                <div className='sliderBlock'>
                  <div className='sliderImg'>
                    <img src='../assets/image/1519870892359-1.png' alt="Image 2" />
                  </div>
                  <div className='sliderImg'>
                    <img src='../assets/image/Batman-Logo-1939-1.png' alt="Image 3" />
                  </div>
                </div>

                <div className='sliderBlock'>
                  <div className='sliderImg'>
                    <img src='../assets/image/1519865127396-1.png' alt="Image 3" />
                  </div>
                  <div className='sliderImg'>
                    <img src='../assets/image/7a3ec529632909-1.png' alt="Image 3" />
                  </div>
                </div>

                <div className='sliderBlock'>
                  <div className='sliderImg'>
                    <img src='../assets/image/tyrdtjfaft-04-1.png' alt="Map" />
                  </div>
                  <div className='sliderImg'>
                    <img src='../assets/image/images 2.png' alt="Image 3" />
                  </div>
                </div>

                <div className='sliderBlock'>
                  <div className='sliderImg'>
                    <img src='../assets/image/Arc-Web-Solutions-Main-Logo-1.png' alt="Image 2" />
                  </div>
                  <div className='sliderImg'>
                    <img src='../assets/image/LogoMaker 1.png' alt="Image 3" />
                  </div>
                </div>

                <div className='sliderBlock'>
                  <div className='sliderImg'>
                    <img src='../assets/image/436-4361187_logo-random-1.png' alt="Image 3" />
                  </div>
                  <div className='sliderImg'>
                    <img src='../assets/image/07532bb8bd0171f0fa684ff1f4f7debf-1.png' alt="Image 3" />
                  </div>
                </div>

                <div className='sliderBlock'>
                  <div className='sliderImg'>
                    <img src='../assets/image/1519870892359-1.png' alt="Image 2" />
                  </div>
                  <div className='sliderImg'>
                    <img src='../assets/image/Batman-Logo-1939-1.png' alt="Image 3" />
                  </div>
                </div>

                <div className='sliderBlock'>
                  <div className='sliderImg'>
                    <img src='../assets/image/1519865127396-1.png' alt="Image 3" />
                  </div>
                  <div className='sliderImg'>
                    <img src='../assets/image/7a3ec529632909-1.png' alt="Image 3" />
                  </div>
                </div>
              </Slider>

              <div className='rangeOutter'>
                <input type="range" min="1" max="100" defaultValue="50" className="rangMain" id="myRange" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;
