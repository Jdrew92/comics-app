import logo from '../logo.svg';
import { CardGroup, Card, Nav } from 'react-bootstrap';
import React from 'react';

const Character = () => {
    return (
        <CardGroup>
            <Card border="light">
                <Card.Image variant="top" src={logo}></Card.Image>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#first">Power Stats</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Bio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled">Appearance</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled">Connections</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled">Work</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>

                    </Card.Title>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default Character;