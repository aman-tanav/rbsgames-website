import "bootstrap/dist/css/bootstrap.css";
// import "../about/test.css";
import React from "react";
import Header from "../../Component/Header/Index";
import Footer from "../../Component/Footer/Footer";
import Link from "next/link";
import game from "../../public/assets/image/game-development.png";
import app from "../../public/assets/image/app-development.png";
import web from "../../public/assets/image/web-development.png";
import block from "../../public/assets/image/block-chain.png";
import animation from "../../public/assets/image/3d-animation.png";
import graphic from "../../public/assets/image/graphic-design.png";
import mobile from "../../public/assets/image/Gamei.png";
import webi from "../../public/assets/image/webi.png";

import thdi from "../../public/assets/image/3Di.png";

import appi from "../../public/assets/image/appi.png";

import graphici from "../../public/assets/image/graphici.png";

import Blockchaini from "../../public/assets/image/Blockchaini.png";

import Image from "next/image";

const development = [
  {
    image: game,
    title: "DEVELOPMENT",
    shortTitle: "Game",
    icon: mobile,
    path: "/game-development",
  },
  {
    image: app,
    shortTitle: "App",
    title: "DEVELOPMENT",
    icon: appi,
    path: "/app-development",
  },
  {
    image: web,
    shortTitle: "Web",
    title: "DEVELOPMENT",
    icon: webi,
    path: "/web-development",
  },
  {
    image: block,
    shortTitle: "BLOCKCHAIN",
    title: "Soloutions",
    icon: Blockchaini,
    path: "/blockchain-solution",
  },
  {
    image: animation,
    shortTitle: "3D MODELLING",
    title: "Animations",
    icon: thdi,
    path: "/modelling-animation",
  },
  {
    image: graphic,
    shortTitle: "Graphic Design",
    title: "",
    icon: graphici,
    path: "/graphic-designing",
  },
];

export default function Solution() {
  return (
    <div>
      <Header />

      <div className="bannerCommon bannerLeft">
        <div className="outterText">
          <h2>Solutions</h2>
          <p>
            Whether you are looking to create a stunning game, build <br />a
            user-friendly app, develop a responsive website, <br />
            implement blockchain technology, create 3D models and <br />{" "}
            animations, or design captivating graphics, we have got you <br />
            covered.
          </p>
        </div>
      </div>

      <div className="solutionCards">
        <div className="container">
          <div className="row">
            <div className="browse-inner-data">
              <div className="titleLine">
                <h3>GET EXPERT SOLUTIONS ON A WIDE RANGE OF SERVICES</h3>
              </div>
              <p>
                Our team of experts is dedicated to providing you with the best
                possible solutions to help you achieve your goals. Our solutions
                are tailored to your specific needs and requirements, ensuring
                that you get exactly what you need.
              </p>
            </div>
          </div>

          <div className="solutionCardOutter">
            <div className="row">
              {development.map((item) => (
                <>
                  <div className="col-md-4">
                    <Link href={item.path} passHref>
                      <div className="cardSolution">
                        <Image src={item.image} className="bgImgg" />
                        <div className="cardDetails">
                          <Image src={item.icon} />
                          <h2>
                            {item.shortTitle} <br />
                            {item.title}
                          </h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              ))}

              {/* <div className='col-md-4'>
                <Link href="/app-development" passHref>
                  <div className='cardSolution'>
                    <div className='cardDetails'>
                    <Image src={game} className="bgImgg" />
                      <h2>App <br />DEVELOPMENT</h2>
                    </div>

                  </div>
                </Link>
              </div> */}

              {/* <div className='col-md-4'>
                <Link href="/web-development" passHref >
                  <div className='cardSolution'>
                    <div className='cardDetails'>
                    <Image src={game} className="bgImgg" />
                      <h2>Web <br />DEVELOPMENT</h2>
                    </div>
                  </div>
                </Link>
              </div> */}

              {/* <div className='col-md-4'>
                <Link href="/blockchain-solution " passHref>
                  <div className='cardSolution'>
                    <div className='cardDetails'>
                    <Image src={game} className="bgImgg" />
                      <h2>BLOCKCHAIN <br /> SOLUTIONS</h2>
                    </div>
                  </div>
                </Link>
              </div> */}

              {/* <div className='col-md-4'>
                <Link href="/modelling-animation" passHref>
                  <div className='cardSolution'>
                    <div className='cardDetails'>
                    <Image src={game} className="bgImgg" />
                      <h2>3D MODELLING  <br /> ANIMATION</h2>
                    </div>
                  </div>
                </Link>
              </div> */}

              {/* <div className='col-md-4'>
                <Link href="/graphic-designing" passHref>
                  <div className='cardSolution'>
                    <div className='cardDetails'>
                    <Image src={game} className="bgImgg" />
                      <h2>GRAPHIC DESIGN</h2>
                    </div>
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
