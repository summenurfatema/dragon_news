import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";


const NewsCard = ({ news }) => {
    const { _id, title, author, image_url, details, rating, total_view } = news;
    return (
        <Card className="mb-3">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author?.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img src={image_url} alt="Card image" />

                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </p>

                            :
                            <p>{details}</p>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className='text-warning me-2' />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye />
                    <span className='ms-2'>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;