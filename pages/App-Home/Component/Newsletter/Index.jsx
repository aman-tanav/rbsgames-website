import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

const NewsletterIndex = () => {
    return (
        <>
            <section className="newsletter py-5 position-relative" style={{ backgroundImage: `url(../assets/image/newsletter.png)`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <Container>
                    <Row className='justify-content-end'>
                        <Col lg="4" className='my-2'>
                            <div className="sectionHeader">
                                <h6 className="text-white text-uppercase m-0 pb-3 fw-bold">Sign up to our newsletter</h6>
                                <p className="m-0 py-2 text-white">Keep up with the latest news, special events & other exciting news.</p>
                                <Form>
                                    <Row>
                                        <Col lg="12" className='my-2 py-2'>
                                            <input type="text" placeholder='First name' className="form-control bg-transparent text-white" />
                                        </Col>
                                        <Col lg="12" className='my-2 py-2'>
                                            <input type="text" placeholder='Last name' className="form-control bg-transparent text-white" />
                                        </Col>
                                        <Col lg="12" className='my-2 py-2'>
                                            <input type="email" placeholder='Email' className="form-control bg-transparent text-white" />
                                        </Col>
                                        <Col lg="6" className='my-2 py-2'>
                                            <input type="Date" placeholder='Last name' className="form-control bg-transparent text-white" />
                                        </Col>
                                        <Col lg="6" className="my-2 py-2">
                                            <Form.Select className="form-control bg-transparent text-white" aria-label="Default select example">
                                                <option>Region</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col lg="12" className="my-2 py-2">
                                            <Form.Select className="form-control bg-transparent text-white" aria-label="Default select example">
                                                <option>Select Platform</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col lg="12" className="my-2 py-2">
                                            <div className="d-flex align-items-start gap-10 form-checkWrp">
                                                <input type="checkbox" className="form-check" />
                                                <p className="m-0 text-white fw-normal"> By signing up, I confirm that I am 18 years old or older. I agree to the Terms and Conditions and I have read the Privacy Policy.</p>
                                            </div>
                                        </Col>
                                        <Col lg="12" className="my-2 py-2">
                                            <div className="d-flex align-items-start gap-10 form-checkWrp">
                                                <input type="checkbox" className="form-check" />
                                                <p className="m-0 text-white fw-normal">I agree to receive promotional offers relating to all games and services.</p>
                                            </div>
                                        </Col>
                                        <Col lg="12" className='my-2 py-2'>
                                            <Button className="formBtn d-inline-flex align-items-center justify-content-center">
                                            Count me in!
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewsletterIndex