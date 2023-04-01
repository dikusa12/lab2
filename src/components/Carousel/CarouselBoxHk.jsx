import React from 'react';
import { Carousel } from "react-bootstrap";
import firstImage from '../../assets/marek-piwnicki-i5AF9bW10p0-unsplash.jpg'
import secondImage from '../../assets/claudio-schwarz-5hj0bYdg1Gc-unsplash.jpg'
import thirdImage from '../../assets/hunter-so-Z8E2UGKDQjo-unsplash.jpg'
const CarouselBoxHk = () => {
    return (
        <Carousel className="w-50 h-50 mt-5 mx-auto">
            <Carousel.Item className="h-100">
                <img src={firstImage} alt="" className="w-100 h-auto object-fit-cover" />
            </Carousel.Item>
            <Carousel.Item className="h-100">
                <img src={secondImage} alt="" className="w-100 h-auto object-fit-cover" />
            </Carousel.Item>
            <Carousel.Item className="h-100">
                <img src={thirdImage} alt="" className="w-100 h-auto object-fit-cover" />
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselBoxHk;