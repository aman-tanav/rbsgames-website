'use client'

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import Header from "../../Component/Header/Index"
import Footer from "../../Component/Footer/Footer"
import Image from 'next/image'

import Social from "../../public/assets/appImage/soical.png"
import Ecommerce from "../../public/assets/appImage/ecommerse.png"
import Product from "../../public/assets/appImage/prodectivity.png"
import Education from "../../public/assets/appImage/education.png"
import HealthFitness from "../../public/assets/appImage/healthfitness.png"
import News from "../../public/assets/appImage/news.png"
import Wather from "../../public/assets/appImage/waether.png"
import Music from "../../public/assets/appImage/music.png"
import Travel from "../../public/assets/appImage/tarvel.png"
import Food from "../../public/assets/appImage/food.png"
import lifestyle from "../../public/assets/appImage/lifestyle.png"
import ultities from "../../public/assets/appImage/ultities.png"
import photo from "../../public/assets/appImage/photo.png"
import communication from "../../public/assets/appImage/communication.png"
import finacing from "../../public/assets/appImage/finacing.png"


const ImageText = [{
  image: Social,
  title: "SOCIAL NETWORKING APPS"
},
{
  image: Ecommerce,
  title: "E-COMMERCE APPS "
},
{
  image: Product,
  title: "PRODUCTIVITY APPS"
}, {
  image: Education,
  title: "EDUCATION APPS"
}, {
  image: HealthFitness,
  title: "HEALTH & FITNESS APPS"
}, {
  image: News,
  title: "NEWS & MAGAZINE APPS"
}, {
  image: Wather,
  title: "WEATHER APPS"
}, {
  image: Music,
  title: "MUSIC & VIDEO STREAMING APPS"
}, {
  image: Travel,
  title: "TRAVEL & NAVIGATION APPS"
}
, {
  image: Food,
  title: "FOOD & RECIPE APPS"
}
, {
  image: lifestyle,
  title: "LIFESTYLE  & ENTERTAINMENT APPS"
}
, {
  image: ultities,
  title: "UTILITIES & TOOLS APPS"
}
, {
  image: photo,
  title: "PHOTOGRAPHY & EDITING APPS"
}
, {
  image: communication,
  title: "COMMUNICATION APPS"
}, {
  image: finacing,
  title: "FINANCING & BANKING APPS"
}
]

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

