import 'bootstrap/dist/css/bootstrap.css';
import "./test.css";
import React from 'react';
import Pressslider from '../Pressslider/Pressslider';
import Header from '../../Component/Header/Index';
import Footer from '../../Component/Footer/Footer';





export default function Newsroom() {
  return (
    <div>
<Header />
      <div className='bannerCommon newsBanner'>
        <div className='outterText'>
          <h2>Newsroom</h2>
          <p>
            Discover the most recent news and announcements <br/>directly from RBS Labs
          </p>
        </div>
      </div>

      <div className='solutionCards'>
        <div className='container'>
          <Pressslider />

        </div>
      </div>

      <div className='filterSec'>
        <div className='container'>
          <div className='row'>
            <h2>
              ALL PRESS RELEASES
            </h2>

            <div className='searchbar'>
              <div className='searchFilter'>
                <div className="inputoutter">
                  <input type="text" className="form-control" id="search" placeholder="Search by date and month" />
                </div>
              </div>

              <ul className='fliterData'>
                <li>
                  <h4 className='datered'>June 13, 2023</h4>
                  <p className='strong'>Amazon Launches Revolutionary New Healthcare Platform With Advanced AI Capabilities</p>
                  <p>

                    The tech giant s new platform is expected to transform healthcare delivery and improve patient outcomes, using advanced machine learning and AI algorithms to provide personalized care and diagnoses.
                  </p>
                </li>
                <li>
                  <h4 className='datered'>June 13, 2023</h4>
                  <p className='strong'>Amazon Launches Revolutionary New Healthcare Platform With Advanced AI Capabilities</p>
                  <p>
                    The tech giant s new platform is expected to transform healthcare delivery and improve patient outcomes, using advanced machine learning and AI algorithms to provide personalized care and diagnoses.
                  </p>
                </li>
                <li>
                  <h4 className='datered'>June 8, 2023</h4>
                  <p className='strong'>Virtual Reality and Augmented Reality Technologies Offer New Opportunities for Entertainment and Education</p>
                  <p>
                    With the ability to transport users to new worlds and offer immersive experiences, virtual and augmented reality technologies are transforming industries such as entertainment, education, and travel.
                  </p>
                </li>
                <li>
                  <h4 className='datered'>January 4, 2023</h4>
                  <p className='strong'>Artificial Intelligence Takes Center Stage as Companies Seek to Automate Processes and Improve Decision-Making</p>
                  <p>
                    With advancements in machine learning, natural language processing, and other AI technologies, companies are increasingly turning to AI-based solutions to improve efficiency, productivity, and innovation.
                  </p>
                </li>
                <li>
                  <h4 className='datered'>June 13, 2023</h4>
                  <p className='strong'>Amazon Launches Revolutionary New Healthcare Platform With Advanced AI Capabilities</p>
                  <p>

                    The tech giant s new platform is expected to transform healthcare delivery and improve patient outcomes, using advanced machine learning and AI algorithms to provide personalized care and diagnoses.
                  </p>
                </li>
                <li>
                  <h4 className='datered'>June 13, 2023</h4>
                  <p className='strong'>Amazon Launches Revolutionary New Healthcare Platform With Advanced AI Capabilities</p>
                  <p>
                    The tech giant s new platform is expected to transform healthcare delivery and improve patient outcomes, using advanced machine learning and AI algorithms to provide personalized care and diagnoses.
                  </p>
                </li>
              </ul>


              <div className='paginationOutter'>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>

                  <li className="page-item"><a className="page-link" href="#">15</a></li>
                  <li className="page-item">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>16</option>
                      <option value="1">17</option>
                      <option value="2">18</option>
                      <option value="3">19</option>
                    </select></li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
