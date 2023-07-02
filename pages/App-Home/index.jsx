"use client"
import React from 'react'
import "./slick.min.css"
// import "./slick-theme.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

// 
import Header from "../../Component/Header/Index"
import Footer from "../../Component/Footer/Footer"
import OurMission from "./Component/OurMission/Index"
import NewsletterIndex from "./Component/Newsletter/Index"
import LatestNews from "./Component/LatestNews/Index"
import Expertise from "./Component/Expertise/Index"
import HeroSec from "./Component/HeroSec/Index"

const index = () => {
  return (
    <>
    <Header />
    <HeroSec />
    <Expertise />
    <OurMission />
    <LatestNews />
    <NewsletterIndex />
    <Footer />
    </>
  )
}

export default index