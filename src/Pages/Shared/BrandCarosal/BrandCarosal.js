import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const BrandCarosal = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/blue-white-news-business-company-logo_23-2148462271.jpg?size=338&ext=jpg&ga=GA1.2.821203553.1657130385&semt=sph"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/news-logo-collection-template-concept_23-2148467599.jpg?w=360&t=st=1666407847~exp=1666408447~hmac=3005ef7da683f33370a326e31c276c0bdc79a592741cee2e39bede4bb7eb82b2"
                    alt="Second slide"
                />

            </Carousel.Item>

        </Carousel>
    );
};

export default BrandCarosal;