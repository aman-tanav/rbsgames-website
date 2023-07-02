import React, { Component }  from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Slider from "react-slick";

const ExpertiseIndex = () => {
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
              }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  centerMode: false,
                }
              },
        ]
      };
    return (
        <>
            <section className="ProductSlider py-5 position-relative">
                <Container>
                    <Row>
                        <Col lg="12" className='my-2'>
                            <div className="sectionHeader position-relative d-flex align-items-center justify-content-between gap-10 ">
                                <h6 className="mb-3 position-relative pb-2 underLine text-uppercase w-100">
                                    Our Expertise
                                </h6>
                                    <Form className='bg-white filterForm d-flex align-items-center justify-content-end gap-10'>
                                        <div className="position-relative icon-with-text">
                                            <span className="icn position-absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M15.0001 19.88C15.0401 20.18 14.9401 20.5 14.7101 20.71C14.6176 20.8027 14.5077 20.8763 14.3868 20.9264C14.2658 20.9766 14.1361 21.0024 14.0051 21.0024C13.8742 21.0024 13.7445 20.9766 13.6235 20.9264C13.5025 20.8763 13.3926 20.8027 13.3001 20.71L9.29013 16.7C9.18107 16.5934 9.09814 16.463 9.04783 16.319C8.99752 16.175 8.9812 16.0213 9.00013 15.87V10.75L4.21013 4.62C4.04774 4.41153 3.97446 4.14726 4.00632 3.88493C4.03817 3.6226 4.17257 3.38355 4.38013 3.22C4.57013 3.08 4.78013 3 5.00013 3H19.0001C19.2201 3 19.4301 3.08 19.6201 3.22C19.8277 3.38355 19.9621 3.6226 19.9939 3.88493C20.0258 4.14726 19.9525 4.41153 19.7901 4.62L15.0001 10.75V19.88ZM7.04013 5L11.0001 10.06V15.58L13.0001 17.58V10.05L16.9601 5H7.04013Z" fill="black" />
                                                </svg>
                                            </span>
                                            <input type="text" placeholder='Filter' className="form-control rounded-pill border-dark ps-5" />
                                        </div>
                                        <div className="position-relative icon-with-text">
                                            <span className="icn position-absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <input type="text" placeholder='Search' className="form-control rounded-pill border-dark ps-5" />
                                        </div>
                                    </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className='mt-3'>
                    <Row>
                        <Col lg="12" className='my-2'>
                        <Slider {...settings} className="productSlider text-center">
                            <div className="p-3">
                                 <div className="cardCstm p-3 d-flex align-items-end justify-content-center text-center position-relative">
                                    <img src="../assets/image/ps1.png" alt="" className="img-fluid position-absolute h-100 w-100" />
                                    <div className="content">
                                          <h6 className="fw-sbold m-0 text-uppercase py-2 text-white">Top 7 Virtual Reality Games</h6>
                                    </div>
                                 </div>
                            </div>
                            <div className="p-3">
                                 <div className="cardCstm p-3 d-flex align-items-end justify-content-center text-center position-relative">
                                    <img src="../assets/image/ps1.png" alt="" className="img-fluid position-absolute h-100 w-100" />
                                    <div className="content">
                                          <h6 className="fw-sbold m-0 text-uppercase py-2 text-white">Top 7 Virtual Reality Games</h6>
                                    </div>
                                 </div>
                            </div>
                            <div className="p-3">
                                 <div className="cardCstm p-3 d-flex align-items-end justify-content-center text-center position-relative">
                                    <img src="../assets/image/ps1.png" alt="" className="img-fluid position-absolute h-100 w-100" />
                                    <div className="content">
                                          <h6 className="fw-sbold m-0 text-uppercase py-2 text-white">Top 7 Virtual Reality Games</h6>
                                    </div>
                                 </div>
                            </div>
                            <div className="p-3">
                                 <div className="cardCstm p-3 d-flex align-items-end justify-content-center text-center position-relative">
                                    <img src="../assets/image/ps1.png" alt="" className="img-fluid position-absolute h-100 w-100" />
                                    <div className="content">
                                          <h6 className="fw-sbold m-0 text-uppercase py-2 text-white">Top 7 Virtual Reality Games</h6>
                                    </div>
                                 </div>
                            </div>
                            <div className="p-3">
                                 <div className="cardCstm p-3 d-flex align-items-end justify-content-center text-center position-relative">
                                    <img src="../assets/image/ps1.png" alt="" className="img-fluid position-absolute h-100 w-100" />
                                    <div className="content">
                                          <h6 className="fw-sbold m-0 text-uppercase py-2 text-white">Top 7 Virtual Reality Games</h6>
                                    </div>
                                 </div>
                            </div>
                            <div className="p-3">
                                 <div className="cardCstm p-3 d-flex align-items-end justify-content-center text-center position-relative">
                                    <img src="../assets/image/ps1.png" alt="" className="img-fluid position-absolute h-100 w-100" />
                                    <div className="content">
                                          <h6 className="fw-sbold m-0 text-uppercase py-2 text-white">Top 7 Virtual Reality Games</h6>
                                    </div>
                                 </div>
                            </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ExpertiseIndex