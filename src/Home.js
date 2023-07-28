import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img
                    className='home__image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                    <div className="home__row">
                    <Product
                        id="12345"
                        title='AMD Ryzen 9 
                        5900X 12-core,
                        24-Thread Unlocked 
                        Desktop Processor'
                        price={399.99}
                        image='https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX300_SY300_.jpg'
                        rating={5}
                    />

                    <Product
                        id="23456"
                        title='Women’s 
                        Snow Boot With Waterproof
                        Lace Up Mid-Calf Outdoor 
                        Winter Deep
                        Tread Rubber Sole'
                        price={79.99}
                        image="https://m.media-amazon.com/images/I/71PxO4kQ7kL._AC_UL1500_.jpg"
                        rating={2}
                    />
                </div>
                <div className="home__row">
                    <Product
                        title="Sony WH-1000XM5
                        Wireless Industry Leading
                        Noise Canceling Headphones 
                        Black"
                        price={499.99}
                        image="https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SY355_.jpg"
                        rating={3}
                    />
                    <Product
                        title="SAMSUNG Galaxy
                    S22 Ultra Cell Phone, 
                    Factory Unlocked Android
                    Smartphone, 512GB, 8K Camera & Video, 
                    Brightest Display Screen, S Pen."
                        price={1199.99}
                        image="https://m.media-amazon.com/images/I/71Wkk4n9olL._AC_SX425_.jpg"
                        rating={5}
                    />
                    <Product 
                        title="2021 Apple MacBook Pro
                    (16-inch, Apple M1 Max chip with 10‑
                    core CPU and 32‑core GPU, 64GB RAM, 2TB SSD) 
                    Space Gray"
                        price={4299.99}
                        image="https://m.media-amazon.com/images/I/614DdpPUFzL._AC_SY355_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        title="Makeup Kit All-in-one
                    Makeup Gift Set for Women Full Kit, 
                    Include Makeup Brush Set, Eyeshadow Palette,
                    Lip Gloss Set, Lipstick, Blush, Foundation, 
                    Concealer, Mascara, Eyebrow Pencil"
                        price={89.99}
                        image="https://m.media-amazon.com/images/I/810N6KvbioL._SY355_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home