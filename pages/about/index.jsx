'use client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Slicks from '../slicks/Slicks';

import Slicksblue from '../Slicksblue/Slicksblue'
import Ourcustomer from '../ourcustomer/Ourcustomer';

import Header from "../../Component/Header/Index"
import Footer from "../../Component/Footer/Footer"

export default function About() {
  return (
    <div>
      <Header />

      <div className='aboutBg'>
        <div className='outterText'>
          <h2>What we believe in</h2>
          <ul>
            <li>Empowering Innovation: Fostering a culture of innovation and <br />exploring new possibilities.</li>
            <li>Exceeding Expectations: Delivering high-quality solutions that <br /> go above and beyond.</li>
            <li>Collaborative Approach: Valuing teamwork, open communication, <br /> and mutual trust.</li>
            <li>Ethical Practices: Conducting business with honesty, fairness, <br /> and respect.</li>
            <li>Continuous Learning: Embracing new technologies and staying ahead.</li>
            <li>Customer-Centric Approach: Understanding unique challenges and  <br />
              providing exceptional service.</li>
          </ul>
        </div>
        <div className='scrollDown'>
            <img src='../assets/image/mouse.png' alt="Map" />
        </div>
      </div>

      <Slicks />
      <Slicksblue />
      <Ourcustomer />
      <Footer />
    </div>
  );
}
