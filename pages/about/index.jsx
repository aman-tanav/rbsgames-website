"use client"
import 'bootstrap/dist/css/bootstrap.css';
import "../about/test.css"
// import DrawMap from '../../public/assets/image/map.png';

import MyComponent from "../help/map"


export default function About() {
  return (
    <div>
      <div className='bannerCommon'>
        <div className='outterText'>
          <h2>Contact Us</h2>
          <p>
            We are thrilled to hear from you! Whether you have a question, need assistance, we are hear to help. At RBS Labs, we value our clients and strive to provide exceptional support and services
          </p>
        </div>
      </div>

      <div className='ContactForm'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='formSide'>
                <h3>Contact Us</h3>
                <p>Keep up with the latest news, special events & <br /> other exciting news.</p>
              </div>

              <div className='formOutter'>
                <div class="inputoutter">
                  <input type="text" class="form-control" id="fName" placeholder="First name" />
                </div>
                <div class="inputoutter">
                  <input type="text" class="form-control" id="lName" placeholder="Last name" />
                </div>
                <div class="inputoutter">
                  <input type="text" class="form-control" id="email" placeholder="Email" />
                </div>
                <div class="row g-3 align-items-center inputoutter">
                  <div class="col-md-6">
                    <input type="text" id="phone" class="form-control" aria-labelledby="Phone" placeholder="Phone" />
                  </div>
                  <div class="col-md-6">
                    <select class="form-select" aria-label="Region" placeholder="Region">
                      <option >Region</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div class="messageOutter">
                  <textarea class="form-control" id="message" rows="3" placeholder="Message" ></textarea>
                </div>

                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input checkBox" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      By signing up, I confirm that I am 18 years old or older. I agree to the <a href="">Terms and Conditions</a> and I have read the <a href="">Privacy Policy.</a>
                    </label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input checkBox" type="checkbox" id="gridCheck2" />
                    <label class="form-check-label" for="gridCheck2">
                      I agree to receive promotional offers relating to all games and services.
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="submitBtn">Submit</button>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
            <MyComponent />
              {/* <div className='mapMain'> */}

                
                {/* <img src='../assets/image/map.png' alt="Map" /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>


    </div>


  )



}
