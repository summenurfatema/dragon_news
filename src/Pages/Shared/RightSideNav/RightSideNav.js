import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';



import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp, FaStackExchange } from "react-icons/fa";
import BrandCarosal from '../BrandCarosal/BrandCarosal';
import { AuthContext } from '../../../context/UserContext';


const RightSideNav = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant='outline-primary'><FaGoogle />Login with Google</Button>
                <Button variant='outline-dark'><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div>
                <h5 className='my-3'>Find us on</h5>

                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook />Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter />Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch />Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp />Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaStackExchange />Privacy Policy</ListGroup.Item>
                    {user.name}
                </ListGroup>
            </div>

            <div>
                <BrandCarosal></BrandCarosal>
            </div>

        </div>
    );
};

export default RightSideNav;