import './cards.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setHero} from '../Redux/Actions';

const Cards = () => {

    const heroes = useSelector((state) => state.heroes);
    const error = useSelector((state)=>state.hasError);
    const dispatch = useDispatch();
    let size = 0;
    let renderCards = "";

    const handleOnClick = (id)=>{
        dispatch(setHero(id))
    }

    if (Array.isArray(heroes)) {
        
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
                            <Link to={"/more/"+hero.name}>
                                <Button onClick={()=>handleOnClick(i)}>+ Show More</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    } else {
        return null;
    }

    return (
        <Row xs="12" md="12" className="g-4">
            {renderCards}
        </Row>
    );
}

export default Cards;