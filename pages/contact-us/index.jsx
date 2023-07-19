"user client"
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Header from "../../Component/Header/Index"
import Footer from "../../Component/Footer/Footer"
// import LocationMarker from '../help/map';
// import Map from '../help/map';
import Input from '../help/Input';
import Map from '../help/map';
// import Footer from "../../Component/Footer"

export default function Contact() {

  const [fields, setFields] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    region: "",
    message: "",
    signup: "",
    agree: ""
  })

  // const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields((prevFormData) => ({ ...prevFormData, [name]: value }));
  };



  const handleChangeCheckbox = (event) => {
    const { name, checked } = event.target;
    setFields((prevCheckboxValues) => ({
      ...prevCheckboxValues,
      [name]: checked,
    }));
  };

  console.log('fields', fields)




  return (
    <div>
      <Header />

      <div className='bannerCommon'>
        <div className='outterText'>
          <h2>Contact Us</h2>
          <p>
            We are thrilled to hear from you! Whether you have a question, need assistance, we are here to help. At RBS Labs, we value our clients and strive to provide exceptional support and services.
          </p>
        </div>
      </div>

      <div className='ContactForm'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='formSide'>
                <h3>Contact Us</h3>
                <p>Keep up with the latest news, special events &amp; other exciting news.</p>
              </div>

              <div className='formOutter'>
                <div className="inputoutter">
                  <input onChange={handleChange} name="fname" type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="inputoutter">
                  <Input onChange={handleChange} name="lname" type="text" className="form-control" id="lName" placeholder="Last name" />
                </div>
                <div className="inputoutter">
                  <Input onChange={handleChange} name="email" type="text" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="row g-3 align-items-center inputoutter">
                  <div className="col-md-6">
                    <Input onChange={handleChange} name="mobile" type="number" id="phone" className="form-control" aria-labelledby="Phone" placeholder="Phone" />
                  </div>
                  <div className="col-md-6">
                    <select onChange={handleChange} name="region" className="form-select" aria-label="Region" placeholder="Region">
                      <option>Region</option>
                      <option value="one">One</option>
                      <option value="two">Two</option>
                      <option value="three">Three</option>
                    </select>
                  </div>
                </div>

                <div className="messageOutter">
                  <textarea onChange={handleChange} className="form-control" name="message" id="message" rows="3" placeholder="Message"></textarea>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input onChange={handleChangeCheckbox} checked={fields.signup || false} name="signup" className="form-check-input checkBox" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                      By signing up, I confirm that I am 18 years old or older. I agree to the <a href="">Terms and Conditions</a> and I have read the <a href="">Privacy Policy.</a>
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input onChange={handleChangeCheckbox} checked={fields.agree || false} name="agree" className="form-check-input checkBox" type="checkbox" id="gridCheck2" />
                    <label className="form-check-label" htmlFor="gridCheck2">
                      I agree to receive promotional offers relating to all games and services.
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="submitBtn">Submit</button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mapMain">

                {/* <Map /> */}
                {/* <img src='../assets/image/map.png' alt="Map" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
