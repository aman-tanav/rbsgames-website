import React, { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Slider from "react-slick";

const LatestNewsIndex = () => {
  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="ProductSlider py-5 position-relative">
        <Container>
          <Row>
            <Col lg="6" className="my-2">
              <div className="sectionHeader postion-relative ">
                <h6 className="mb-0 position-relative fw-sbold pb-2">
                  Our Latest News
                </h6>
                <p className="m-0 py-2">
                  Check out what’s new at Gameloft! Deep dive into the latest
                  news on your favorite games, as well as stories from
                  Gamelofters all over the world.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="mt-3">
          <Row>
            <Col lg="12" className="my-2">
              <Slider {...settings} className="productSlider text-center">
                <div className="p-3">
                  <div className="cardCstm p-3 d-flex align-items-end justify-content-center text-center position-relative">
                    <img
                      src="../assets/image/ps1.png"
                      alt=""
                      className="img-fluid position-absolute h-100 w-100"
                    />
                    <div className="content">
                      <h6 className="fw-sbold m-0 text-uppercase py-2 text-white">
                        Top 7 Virtual Reality Games
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <div className="cardCstm p-3 d-flex align-items-end justify-content-center text-center position-relative">
                    <img
                      src="../assets/image/humans.png"
                      alt=""
                      className="img-fluid position-absolute h-100 w-100"
                    />
                    <div className="content">
                      <h6 className="fw-sbold m-0 text-uppercase py-2 text-white">
                        Top 7 Virtual Reality Games
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="cardCstm p-3 d-flex align-items-end justify-content-center text-center position-relative">
                    <img
                      src="../assets/image/appdevelopmenthome.png"
                      alt=""
                      className="img-fluid position-absolute h-100 w-100"
                    />
                    <div className="content">
                      <h6 className="fw-sbold m-0 text-uppercase py-2 text-white">
                        Top 7 Virtual Reality Games
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="cardCstm p-3 d-flex align-items-end justify-content-center text-center position-relative">
                    <img
                      src="../assets/image/blockchainhome.png"
                      alt=""
                      className="img-fluid position-absolute h-100 w-100"
                    />
                    <div className="content">
                      <h6 className="fw-sbold m-0 text-uppercase py-2 text-white">
                        Top 7 Virtual Reality Games
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="cardCstm p-3 d-flex align-items-end justify-content-center text-center position-relative">
                    <img
                      src="../assets/image/gamesdevelop.png"
                      alt=""
                      className="img-fluid position-absolute h-100 w-100"
                    />
                    <div className="content">
                      <h6 className="fw-sbold m-0 text-uppercase py-2 text-white">
                        Top 7 Virtual Reality Games
                      </h6>
                    </div>
                  </div>
                </div>
              
               
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LatestNewsIndex;
