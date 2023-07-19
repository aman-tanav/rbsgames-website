import 'bootstrap/dist/css/bootstrap.css';
import "../news/test.css";
import React from 'react';
import Tabs from '../Tabs/index';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Slicksexplore from '../Slicksexplore/Slicksexplore'
import Header from '../../Component/Header/Index';
import Footer from '../../Component/Footer/Footer';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/KD0hqKxa8fk" title="SIDHU MOOSE WALA : CHORNI | DIVINE"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Teamjoin() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>

<Header />

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className='teamJoin'>
        <div className='outterText'>
          <h2>WHAT WE OFFER YOU</h2>
          <p>
            At RDS Labs, we foster a culture of creativity, innovation, and inclusion, where ideas <br />are encouraged and embraced.
          </p>
          <a href='#' className='sliderBtn'>Explore our opportunities</a>
          <img src='../assets/image/mouse.png' alt='' />
        </div>

      </div>

      <div className='solutionCards teamCards'>
        <div className='container'>
          <div className='row'>
            <div className="browse-inner-data">
              <div className='titleLine'>
                <h3>WHAT WE OFFER YOU</h3>
              </div>
              <p>The opportunities, we recognize excellence and provide a clear path for career advancement. </p>
            </div>
          </div>

          <div className='solutionCardOutter'>
            <div className='row'>
              <div className='col-md-3'>
                <div className='cardSolution'>
                  <div className='cardDetails'>
                    <img src='../assets/image/Runners.png' />
                    <h2>TALENTED<br />TEAMMMATES</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='cardSolution'>
                  <div className='cardDetails'>
                    <img src='../assets/image/Office.png' />
                    <h2>INFRASTRUCTURE AND <br />FACILITIES</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='cardSolution'>
                  <div className='cardDetails'>
                    <img src='../assets/image/Safety Collection Place.png' />
                    <h2>SUPPORTIVE AND INCLUSIVE ENVIRONMENT</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='cardSolution'>
                  <div className='cardDetails'>
                    <img src='../assets/image/Teamwork.png' />
                    <h2>COLLABORATIVE WORK CULTURE</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='cardSolution'>
                  <div className='cardDetails'>
                    <img src='../assets/image/Financial Success.png' />
                    <h2>COMPETITIVE SALARIES</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='cardSolution'>
                  <div className='cardDetails'>
                    <img src='../assets/image/Component 1.png' />
                    <h2>HEALTH AND WELLNESS FACILITIES</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='cardSolution'>
                  <div className='cardDetails'>
                    <img src='../assets/image/Onboarding.png' />
                    <h2>WORKSHOP & TEAM BUILDING ACTIVITIES</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='cardSolution'>
                  <div className='cardDetails'>
                    <img src='../assets/image/Get Revenue.png' />
                    <h2>INCENTIVES AND PAID LEAVES</h2>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>


      <div className='videoSec'>
        <div className='content'>
          <h3>
            Join RBS Labs. Lots of opportunitites and <br />growth awaits you!
          </h3>
          <div className='palyBtn'>
            <a href='javaScript:void(0)' onClick={() => setModalShow(true)}>
              <img src='../assets/image/play.png' />
            </a>
          </div>
        </div>
      </div>

      <div className='tabsSec'>
        <div className='container'>
          <div className='row'>
            <div className="browse-inner-data">
              <div className='titleLine'>
                <h3>RBS LABS VALUES</h3>
              </div>
              <p>Our values serve as guiding principles in every decision we make, driving our success and growth. </p>
            </div>

            <Tabs />
          </div>
        </div>
      </div>

      <Slicksexplore />
      <Footer />

    </div>
  );
}
