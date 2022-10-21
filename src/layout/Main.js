import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
const Main = () => {
    return (
        <div>

            <Container>
                <Row>
                    {/* col 1 */}
                    <Col lg='2'>
                        <div>ledt nav</div>
                    </Col>
                    {/* col 2 */}
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    {/* col 3 */}
                    <Col lg='3'>
                        <div>right side</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;