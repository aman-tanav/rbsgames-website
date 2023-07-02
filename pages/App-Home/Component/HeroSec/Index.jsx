import React from 'react'
import { Container, Row  , Carousel, Button} from 'react-bootstrap'

const HeroSecIndex = () => {
  return (
    <>
    <section className="HeroSec position-relative text-center">
    <Carousel>
      <Carousel.Item className=''>
        <img
          className="d-block sliderImg w-100"
          src="../assets/image/hs1.png"
          alt="First slide"
        />
      <Button variant="transparent" className="border-0 p-0  position-absolute mouse">
        <img src="../assets/image/mouse.png" alt="" className="img-fluid" />
      </Button>
        <Carousel.Caption className='pb-5'>
          <h3 className='m-0 py-2 fw-bold'>Integrate best innovative solutions</h3>
          <p  className='m-0 py-2'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          <div className="btnWrp text-center d-flex justify-content-center mt-4">
            <Button className="d-inline-flex align-items-center justify-content-center common-btn">Join Now!</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    </>
  )
}

export default HeroSecIndex 