import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    {/* col 1 */}
                    <Col lg='2'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    {/* col 2 */}
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    {/* col 3 */}
                    <Col lg='3'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;