import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant='outline-primary'><FaGoogle />Login with Google</Button>
                <Button variant='outline-dark'><FaGithub /> Login with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNav;