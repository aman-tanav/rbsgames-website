import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const OurMissionIndex = () => {
  return (
    <>
     <section className="our-mission img-with-text py-5 position-relative" style={{backgroundImage: "url(../assets/image/ourMission.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        <Container className='my-lg-5 py-md-5'>
            <Row>
                <Col lg="6" className='my-2'>
                    <div className="sectionHeader">
                        <h6 className="text-white text-uppercase m-0 pb-2 fw-bold underLine position-relative mb-4 d-inline-block">Our Mission</h6>
                        <p className="m-0 py-2 text-white">
                        Our mission is to amaze the world so that everyone can enjoy a moment of happiness. We put all our art and craft into it and create multiplatform experiences that are a benchmark for the industry and downloaded by millions of players every day. <br /> <br />

Our mission is to amaze the world so that everyone can enjoy a moment of happiness. We put all our art and craft into it and create multiplatform experiences that are a benchmark for the industry and downloaded by millions of players every day.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
     </section>
    </>
  )
}

export default OurMissionIndex