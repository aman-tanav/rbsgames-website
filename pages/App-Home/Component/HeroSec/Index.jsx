import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Container, Row, Carousel, Button } from "react-bootstrap";

const HeroSecIndex = () => {
  return (
    <>
      <section className="HeroSec position-relative text-center">
        <Head>
          <title>My Next.js App</title>
          <meta
            name="description"
            content="This is the description of my app."
          />
          {/* Add more meta tags as needed */}
        </Head>

        <Carousel>
          <Carousel.Item className="">
            <img
              className="d-block sliderImg rounded-0 w-100"
              src="../assets/image/hs1.png"
              alt="First slide"
            />
            <Button
              variant="transparent"
              className="border-0 p-0  position-absolute mouse"
            >
              {/* <img src="../assets/image/mouse.png" alt="" className="img-fluid" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="22"
                viewBox="0 0 16 22"
                fill="none"
              >
                <path
                  // fill-rule="evenodd"
                  // clip-rule="evenodd"
                  d="M0.25 8C0.25 5.94457 1.06652 3.97333 2.51992 2.51992C3.97333 1.06652 5.94457 0.25 8 0.25C10.0554 0.25 12.0267 1.06652 13.4801 2.51992C14.9335 3.97333 15.75 5.94457 15.75 8V14C15.75 16.0554 14.9335 18.0267 13.4801 19.4801C12.0267 20.9335 10.0554 21.75 8 21.75C5.94457 21.75 3.97333 20.9335 2.51992 19.4801C1.06652 18.0267 0.25 16.0554 0.25 14V8ZM7.25 1.795C5.73338 1.97854 4.33647 2.71111 3.32313 3.85434C2.30979 4.99757 1.75018 6.47231 1.75 8V14C1.75 15.6576 2.40848 17.2473 3.58058 18.4194C4.75268 19.5915 6.3424 20.25 8 20.25C9.6576 20.25 11.2473 19.5915 12.4194 18.4194C13.5915 17.2473 14.25 15.6576 14.25 14V8C14.2498 6.47231 13.6902 4.99757 12.6769 3.85434C11.6635 2.71111 10.2666 1.97854 8.75 1.795V5.378C9.18879 5.53313 9.56867 5.82052 9.83731 6.20056C10.106 6.5806 10.2501 7.0346 10.25 7.5V9.5C10.25 10.0967 10.0129 10.669 9.59099 11.091C9.16903 11.5129 8.59674 11.75 8 11.75C7.40326 11.75 6.83097 11.5129 6.40901 11.091C5.98705 10.669 5.75 10.0967 5.75 9.5V7.5C5.75 6.52 6.376 5.687 7.25 5.378V1.795ZM8 6.75C7.80109 6.75 7.61032 6.82902 7.46967 6.96967C7.32902 7.11032 7.25 7.30109 7.25 7.5V9.5C7.25 9.69891 7.32902 9.88968 7.46967 10.0303C7.61032 10.171 7.80109 10.25 8 10.25C8.19891 10.25 8.38968 10.171 8.53033 10.0303C8.67098 9.88968 8.75 9.69891 8.75 9.5V7.5C8.75 7.30109 8.67098 7.11032 8.53033 6.96967C8.38968 6.82902 8.19891 6.75 8 6.75Z"
                  fill="white"
                />
              </svg>
            </Button>
            <Carousel.Caption className="pb-5">
              <h3 className="m-0 py-2 fw-bold">
                Integrate best innovative solutions
              </h3>

              <p className="banner_dis m-0 py-2">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum
              </p>
              <div className="btnWrp">
                <Button className="d-inline-flex align-items-center justify-content-center common-btn">
                  Join Now!
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default HeroSecIndex;
