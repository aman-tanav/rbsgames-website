'use client'

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import Header from "../../Component/Header/Index"
import Footer from "../../Component/Footer/Footer"
import Image from 'next/image'

import fisrt from "../../public/assets/image/actiongames.png"


const ImageText = [{
  image: fisrt,
  title: "ACTION GAMES"
},
{
  image: fisrt,
  title: "ACTION GAMES"
},
{
  image: fisrt,
  title: "ACTION GAMES"
}, {
  image: fisrt,
  title: "ACTION GAMES"
}, {
  image: fisrt,
  title: "ACTION GAMES"
}, {
  image: fisrt,
  title: "ACTION GAMES"
}, {
  image: fisrt,
  title: "ACTION GAMES"
}, {
  image: fisrt,
  title: "ACTION GAMES"
}, {
  image: fisrt,
  title: "ACTION GAMES"
}
, {
  image: fisrt,
  title: "ACTION GAMES"
}
, {
  image: fisrt,
  title: "ACTION GAMES"
}
, {
  image: fisrt,
  title: "ACTION GAMES"
}
, {
  image: fisrt,
  title: "ACTION GAMES"
}
, {
  image: fisrt,
  title: "ACTION GAMES"
}]

export default function index() {
  return (
    <div>
      <Header />
      <div className='bannerCommon app-dev'>
        <div className='outterText'>
          <h2>App Development</h2>
        </div>
      </div>



      {/* games-categories */}

      <div className="games-catgr">
        <div className="container">
          <div className="row">
            <div className="browse-inner-data">
              <h3>BROWSE OUR APP DEVELOPMENT SEGMENTS</h3>
              <p>In today digital age, mobile apps have become an essential tool for businesses to reach out to their customers and enhance their brand presence. At RBS LABs , we offer expert app development services to create custom mobile apps that are tailored to your business needs and help you transform your business idea into a reality.
              </p>
            </div>
          </div>
          <div className='row'>
          

               <ul className='browserList'>
              {ImageText.map(item => 
              (
                <> <li>
                <div className='browserListBg'>
                  <Image src={item.image} alt="Map" />
                </div>
                <div className="gm-ct">
                  <h3>{item.title}</h3>
                </div>
              </li></>
               )
                )}
              </ul> 
            
          </div>
        </div>
      </div>

      <Footer />

    </div>

  )
}

