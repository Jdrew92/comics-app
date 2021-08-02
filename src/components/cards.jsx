import './cards.css';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Cards = () => {

    const heroes = useSelector((state) => state.heroes);
    const error = useSelector((state)=>state.hasError);
    const dispatch = useDispatch();
    let size = 0;
    let renderCards = "";
    if (typeof heroes === "object") {
        if (heroes !== undefined && !heroes.includes(undefined)) {
            size = heroes.length;
        }
    }

    if(error){
        return(
            <h3>We couldn't find the character you are looking for. <br/> Try again!</h3>
        );
    }

    if (size > 0) {
        renderCards = heroes.map((hero, i) => {
            return (
                <Col key={i}>
                    <Card border="light">
                        <Card.Img variant="top" src={hero.image.url}></Card.Img>
                        <Card.Body>
                            <Card.Text>{hero.name}</Card.Text>
                            <Link to={"/" + hero.name + "/info"}>+ Show More</Link>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    } else {
        return (
            <h2>{heroes}</h2>
        );
    }

    return (
        <Row xs="12" md="12" className="g-4">
            {renderCards}
        </Row>
    );
}

export default Cards;