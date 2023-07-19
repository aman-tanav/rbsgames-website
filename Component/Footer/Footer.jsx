'use client'


import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
// import { useRouter } from 'next/router';
import Link from 'next/link';

const Footer = () => {
    // const router = useRouter();
    return (
        <>
            <footer className="siteFooter">
                <div className="darkBg py-2 text-center" style={{ background: "#000" }}>
                    <Container>
                        <Row>
                            <Col lg="12" className='my-2'>
                            <a href="/" className='text-white fw-sbold'>    <div className="log">
                                    <img src="../assets/image/logo.png" alt="" className="img-fluid" />
                                </div></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="GreyBg py-2 text-center" style={{ background: "#1A1A1A" }}>
                    <Container>
                        <Row>
                            <Col lg="12" className='my-2'>
                                <ul className="list-unstyled ps-0 mb-0 d-flex flex-wrap align-items-center justify-content-center gap-10">
                                <li className="px-3">
                                        <Link href="/" passHref>
                                            <p className='text-white fw-sbold m-0' data-legacy-behavior="true">Home</p>
                                        </Link>
                                    </li>
                                    <li className="px-3">
                                        <Link href="/about" passHref>
                                            <p className='text-white fw-sbold m-0' data-legacy-behavior="true">About us</p>
                                        </Link>
                                    </li>
                                    <li className="px-3">
                                        <Link href="/solution" passHref>
                                            <p className='text-white fw-sbold m-0' data-legacy-behavior="true">Solutions</p>
                                        </Link>
                                    </li>
                                    <li className="px-3">
                                        <Link href="/contact-us" passHref>
                                            <p className='text-white fw-sbold m-0' data-legacy-behavior="true">Contact Us</p>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="darkBg py-2 text-center" style={{ background: "#000" }}>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg="6" className='my-2'>
                                <div className="py-3">
                                    <h6 className="fw-bold text-white m-0 pb-3 text-center">VISIT</h6>
                                    <ul className="list-unstyled ps-0 mb-0 d-flex flex-wrap align-items-center justify-content-center gap-10 mt-3 pb-4 border-bottom border-white">
                                        <li className="px-3">
                                            <Link href="/careers" passHref className='text-white fw-sbold'>Careers</Link>
                                        </li>
                                        <li className="px-3">
                                            <Link href="news" className='text-white fw-sbold'>News</Link>
                                        </li>
                                        <li className="px-3">
                                            <Link href="" className='text-white fw-sbold'>Community</Link>
                                        </li>
                                        <li className="px-3">
                                            <Link href="" className='text-white fw-sbold'>Support</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="py-3 mt-3">
                                    <h6 className="fw-bold text-white m-0 pb-3 text-center">LEGAL</h6>
                                    <ul className="list-unstyled ps-0 mb-0 d-flex flex-wrap align-items-center justify-content-center gap-10 mt-3 pb-4">
                                        <li className="px-3">
                                            <Link href="" className='text-white fw-sbold'>Terms of Use</Link>
                                        </li>
                                        <li className="px-3">
                                            <Link href="" className='text-white fw-sbold'>Private Policy</Link>
                                        </li>
                                        <li className="px-3">
                                            <Link href="" className='text-white fw-sbold'>Cookies Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="GreyBg py-2 text-center" style={{ background: "#1A1A1A" }}>
                    <Container>
                        <Row>
                            <Col lg="12" className='my-2 py-2'>
                                <h6 className="fw-bold text-white m-0 pb-3 text-center">FIND US ON</h6>
                                <ul className="list-unstyled ps-0 mb-0 d-flex flex-wrap align-items-center justify-content-center gap-10 social-links">
                                    <li className="">
                                        <Link href="">
                                            <img src="../assets/image/Facebook.png" alt="" className="img-fluid" />
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="">
                                            <img src="../assets/image/Instagram.png" alt="" className="img-fluid" />
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="">
                                            <img src="../assets/image/Linkedin.png" alt="" className="img-fluid" />
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="">
                                            <img src="../assets/image/Twitter.png" alt="" className="img-fluid" />
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="">
                                            <img src="../assets/image/Youtube.png" alt="" className="img-fluid" />
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="darkBg py-2 text-center" style={{ background: "#000" }}>
                    <Container>
                        <Col lg="12" className='my-2 py-2'>
                            <p className="py-2 m-0 text-white fw-normal">
                                ©2023 RBS Labs. All rights reserved. <br />
                                All other trademarks are the property of their respective owners.
                            </p>
                        </Col>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default Footer