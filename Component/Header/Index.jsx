// "use client"
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Link from 'next/link';

const Header = () => {

    const [sidebar, setSidebar] = useState("")
    const handleClick = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
            <header className='siteHeader py-2 sticky-top' style={{ background: "#000" }}>
                <Container fluid>
                    <nav className='d-flex align-items-center justify-content-between gap-10'>
                        <Link href="">
                            <img src="../assets/image/logo.png" alt="" className="img-fluid" />
                        </Link>
                        <div className="right d-flex align-items-center justify-content-end gap-10">
                            <div className={`sidebar ${sidebar && "active"}`}>
                            <Button variant="transparent" className='border-0 d-lg-none p-0 position-absolute closeBtn' onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M7 7L17 17M7 17L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                            </Button>
                            <ul className={"list-unstyled ps-0 mb-0 d-flex align-items-center justify-content-end gap-10" }>
                            {/* <ul className={sidebar ? "list-unstyled ps-0 mb-0 d-flex align-items-center justify-content-end gap-10 sidebar active" : "list-unstyled ps-0 mb-0 d-flex align-items-center justify-content-end gap-10 sidebar"}> */}
                                <li className="">
                                    <Form className='searchForm position-relative icon-with-text'>
                                        <span className="position-absolute icn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                                <path d="M17.4099 14.4099L14.3649 11.3649L12.0227 10.3973C12.8026 9.28826 13.2204 7.9652 13.2189 6.60944C13.2189 2.96497 10.2539 0 6.60944 0C2.96497 0 0 2.96497 0 6.60944C0 10.2539 2.96497 13.2189 6.60944 13.2189C7.977 13.2204 9.311 12.7954 10.4256 12.003L11.3907 14.3388L14.4356 17.384C14.6309 17.5793 14.8627 17.7342 15.1179 17.8399C15.373 17.9456 15.6465 18 15.9227 18C16.1988 18 16.4723 17.9456 16.7275 17.8399C16.9826 17.7343 17.2145 17.5794 17.4098 17.3841C17.6051 17.1888 17.76 16.957 17.8657 16.7018C17.9714 16.4467 18.0258 16.1732 18.0258 15.897C18.0258 15.6208 17.9714 15.3474 17.8657 15.0922C17.76 14.8371 17.6051 14.6052 17.4099 14.4099ZM1.20172 6.60944C1.20172 3.62768 3.62768 1.20172 6.60944 1.20172C9.5912 1.20172 12.0172 3.62768 12.0172 6.60944C12.0172 9.5912 9.5912 12.0172 6.60944 12.0172C3.62768 12.0172 1.20172 9.5912 1.20172 6.60944ZM16.5601 16.5343C16.3909 16.703 16.1617 16.7978 15.9227 16.7978C15.6838 16.7978 15.4546 16.703 15.2854 16.5343L12.4099 13.6587L11.5126 11.4868L13.6845 12.3841L16.5601 15.2597C16.7289 15.4288 16.8237 15.658 16.8236 15.897C16.8236 16.1359 16.7288 16.3651 16.5601 16.5343Z" fill="white" />
                                            </svg>
                                        </span>
                                        <input type="search" placeholder='Search' className="form-control bg-transparent text-white text-center" />
                                    </Form>
                                </li>
                                <li className="">
                                    <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center justify-content-center gap-10 social-links">
                                        <li className="">
                                            <Link href="">
                                                <img src="../assets/image/Facebook.png" alt="" className="img-fluid" />
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="">
                                                <img src="../assets/image/Instagram.png" alt="" className="img-fluid" />
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="">
                                                <img src="../assets/image/Linkedin.png" alt="" className="img-fluid" />
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="">
                                                <img src="../assets/image/Twitter.png" alt="" className="img-fluid" />
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="">
                                                <img src="../assets/image/Youtube.png" alt="" className="img-fluid" />
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <Button className='d-flex align-items-center justify-content-center gap-10 gradientBtn' onClick={handleClick}>
                                        <span className="icn">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <rect width="20" height="20" fill="url(#pattern0)" />
                                                <defs>
                                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use xlinkHref="#image0_4_251" transform="scale(0.0416667)" />
                                                    </pattern>
                                                    <image id="image0_4_251" width="24" height="24" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYEAQAAAAa7ikwAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cGFwgHM3uZvXUAAAGySURBVEjH7ZW/TipREId/s4mNxkaLRSg0ESXoS7AkmhhfhCeRwk58FmPFvoSiGIwS2MJCm9XK5HwWh5XLn+hVoLm5k2w1u993zszOOdL/+CYMzMTxsVQuy4JgLlSck7Va0sWF4PychUWjIdzrKzgHd3dQKMy8eAoFz3IO0lTeVK/Dw8OsEsjloNWCXg93egowqHm3KyoVaWlJiuPfSCCXk5pNaXVVRJHs/l6SPptqQbcrRdFvJLgw/BNuQaeT5Ub+GrPHx59KcGEomw6fEHxKODiQlpe9JJ//Hr62Jh0ejsOnCny5Oh0RRV9JRuHVqtnNzTTWXwzW7u64ZAjf25PMvvp6qgC3syOLY+ntTapUpJWVTDKEr6/7fj0/S80mlMvT6whArTaEF4vQ78PtbbZqKJUgSeDlxT9JAqWSz+Xz/t1+H1csDrm1GsCIwMN7PWi3x+vuQfU67uQENjYmc+22HzAvmRDA1tYs04wLQ7i+ziSZYNCDzU0pjqX3dymKzJLkpwILnp5EtSqlqSyOxfb2YHtpuuDDrtFY3HF9duYvHB0dif39+V44V1fS5eVceP92fACIUyLzYEAkNAAAAABJRU5ErkJggg==" />
                                                </defs>
                                            </svg>
                                        </span>
                                        Subscribe
                                    </Button>
                                </li>
                            </ul>
                            </div>
                            <Button variant="transparent" className='border-0 p-0' onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="36" viewBox="0 0 51 36" fill="none">
                                    <path d="M3 3H48.0077M3 18H48.0077M3 33H48.0077" stroke="white" strokeWidth="5" strokeLinecap="round" />
                                </svg>
                            </Button>
                        </div>
                    </nav>
                </Container>
            </header>
        </>
    )
}

export default Header