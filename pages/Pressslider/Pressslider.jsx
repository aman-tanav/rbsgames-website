"user client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className='rightArrow' style={{ ...style, display: "block" }} onClick={onClick}>
      <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  d="M42 0H0V34H42V0ZM15.6727 7.26006C15.264 6.88855 14.6316 6.91867 14.2601 7.32733C13.8886 7.73598 13.9187 8.36843 14.3273 8.73994L23.5096 17.0875C23.9786 17.5138 23.9377 18.2634 23.4251 18.6361L14.4118 25.1913C13.9652 25.5161 13.8664 26.1415 14.1913 26.5882C14.5161 27.0348 15.1415 27.1336 15.5882 26.8087L24.6015 20.2536C26.1392 19.1352 26.2619 16.8867 24.855 15.6076L15.6727 7.26006Z" fill="white"/>
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div className='leftArrow' style={{ ...style, display: "block" }} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="34" viewBox="0 0 42 34">
        <path id="Path_1" data-name="Path 1" d="M42,0H0V34H42ZM15.673,7.26a1,1,0,0,0-1.345,1.48l9.182,8.348a1,1,0,0,1-.084,1.549l-9.013,6.555a1,1,0,0,0,1.176,1.617L24.6,20.254a3,3,0,0,0,.253-4.646Z" transform="translate(42 34) rotate(180)" fill="#fff" />
      </svg>
    </div>
  );
}



const Pressslider = ({ customSettings = {} }) => {
  const settings = {
    dots: false,
    arrows:true,
    slidesToShow: 3.5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    ...customSettings,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  };



  return (
    <div>

      <div className='transformTtl newsSlider'>
        <div className='container'>
          <div className='row'>
            <div className="browse-inner-data">
              <div className='titleLine'>
                <h3>LATEST PRESS RELEASES</h3>
              </div>
              <p>Stay informed about the most recent developments in technology by exploring RBS Labs, a reliable resource providing comprehensive coverage of the latest advancements, trends, and innovations that are shaping the world of technology. Our platform offers up-to-date knowledge and insights across a diverse range of topics, including groundbreaking progress in artificial intelligence, robotics, green technologies, telecommunications, and more.</p>
            </div>
          </div>
        </div>


        <div className='solutionCardOutter'>
            <div className='row'>

            <Slider {...settings}>
                <div className='pressCard'>
                  <div className='pressDetails'>
                    <img src='../assets/image/news1.png' />
                    <h4 className='pressDate'>June 24, 2023</h4>
                    <p>Amazon Launches Revolutionary New Healthcare Platform With Advanced AI Capabilities</p>
                  </div>
                </div>
                <div className='pressCard'>
                  <div className='pressDetails'>
                    <img src='../assets/image/news2.png' />
                    <h4 className='pressDate'>June 24, 2023</h4>
                    <p>Amazon Launches Revolutionary New Healthcare Platform With Advanced AI Capabilities</p>
                  </div>
                </div>

                <div className='pressCard'>
                  <div className='pressDetails'>
                    <img src='../assets/image/news3.png' />
                    <h4 className='pressDate'>June 24, 2023</h4>
                    <p>Amazon Launches Revolutionary New Healthcare Platform With Advanced AI Capabilities</p>
                  </div>
                </div>

                <div className='pressCard'>
                  <div className='pressDetails'>
                    <img src='../assets/image/news1.png' />
                    <h4 className='pressDate'>June 24, 2023</h4>
                    <p>Amazon Launches Revolutionary New Healthcare Platform With Advanced AI Capabilities</p>
                  </div>
                </div> 

                <div className='pressCard'>
                  <div className='pressDetails'>
                    <img src='../assets/image/news2.png' />
                    <h4 className='pressDate'>June 24, 2023</h4>
                    <p>Amazon Launches Revolutionary New Healthcare Platform With Advanced AI Capabilities</p>
                  </div>
                </div>

                <div className='pressCard'>
                  <div className='pressDetails'>
                    <img src='../assets/image/news3.png' />
                    <h4 className='pressDate'>June 24, 2023</h4>
                    <p>Amazon Launches Revolutionary New Healthcare Platform With Advanced AI Capabilities</p>
                  </div>
                </div>
          </Slider>



              
              
              


            </div>
          </div>


    
      </div>

    </div>
  );
};

export default Pressslider;
