import './cards.css';
import { Card, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

const Cards = (searched) => {
    let size = 0;
    let renderCards = "";
    if (searched.searched !== undefined) {
        console.log(searched.searched);
        size = searched.searched.length;
        console.log(size > 0);
    }

    const handleOnClick = (event) => {
        console.log(event);
    }

    if (size > 0) {
        renderCards = searched.searched.map((item, i) => {
            return (
                <Col>
                    <Card border="light" key={i}>
                        <Card.Img variant="top" src={item.image.url}></Card.Img>
                        <Card.Body>
                            {item.name}
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    } else {
        return "";
    }

    return (
        <Row xs="12" md="12" className="g-4">
            {renderCards}
        </Row>
    );
}

export default Cards;