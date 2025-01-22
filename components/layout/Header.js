'use client'

import React from 'react'
import Image from 'next/image'
import heroImage from '../../public/images/hero-bg.jpg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function Header() {
    const pathName = usePathname()
  return (
    <>
     <div className={pathName==='/' ? '' :'sub_page'}>
        <div className="hero_area">
            <div className="bg-box">
                <Image src={heroImage} priority alt=""/>
            </div>
            {/* <!-- header section strats --> */}
            <header className="header_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <Link className="navbar-brand" href='/'>
                            <span>
                                pouria.M
                            </span>
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className={pathName==='/'?'nav-item active':'nav-item'}>
                                    <Link className="nav-link" href='/'>صفحه اصلی</Link>
                                </li>
                                <li className={pathName==='/menu'?'nav-item active':'nav-item'}>
                                    <Link className="nav-link" href='/menu'>منو</Link>
                                </li>
                                <li className={pathName==='/about'?'nav-item active':'nav-item'}>
                                    <Link className="nav-link" href='/about'>درباره ما</Link>
                                </li>
                                <li className={pathName==='/contact'?'nav-item active':'nav-item'}>
                                    <Link className="nav-link" href='/contact'>تماس باما</Link>
                                </li>
                            </ul>
                            <div className="user_option">
                                <a className="cart_link position-relative" href="cart.html">
                                    <i className="bi bi-cart-fill text-white fs-5"></i>
                                    <span className="position-absolute top-0 translate-middle badge rounded-pill">
                                        3
                                    </span>
                                </a>
                                <Link href="/auth/login" className="btn-auth">
                                    ورود
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* <!-- end header section --> */}
            {/* <!-- slider section --> */}

           {pathName ==='/'&& <section className="slider_section">
                <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6">
                                        <div className="detail-box">
                                            <h2 className="mb-3 fw-bold">
                                                لورم ایپسوم متن ساختگی
                                            </h2>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                                از
                                                طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                سطرآنچنان که
                                                لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                                بهبود
                                                ابزارهای کاربردی می باشد.
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn1">
                                                    سفارش
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6">
                                        <div className="detail-box">
                                            <h2 className="mb-3 fw-bold">
                                                لورم ایپسوم متن ساختگی
                                            </h2>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                                از
                                                طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                سطرآنچنان که
                                                لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                                بهبود
                                                ابزارهای کاربردی می باشد.
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn1">
                                                    سفارش
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6">
                                        <div className="detail-box">
                                            <h2 className="mb-3 fw-bold">
                                                لورم ایپسوم متن ساختگی
                                            </h2>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                                از
                                                طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                سطرآنچنان که
                                                لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                                بهبود
                                                ابزارهای کاربردی می باشد.
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn1">
                                                    سفارش
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#customCarousel1" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#customCarousel1" data-bs-slide-to="1"></li>
                            <li data-bs-target="#customCarousel1" data-bs-slide-to="2"></li>
                        </ol>
                    </div>
                </div>

            </section>} 

            {/* <!-- end slider section --> */}
        </div>
    </div>
    </>
  )
}

export default Header