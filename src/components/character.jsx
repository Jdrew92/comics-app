import './character.css';
import { CardGroup, Card, Nav, Tab, ListGroup} from 'react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';

const Character = () => {

    const hero = useSelector((state) => state.heroes);
    
    const navItems = Object.keys(hero).map((key, i) => {
        if (key !== "id" && key !== "image" && key !== "name") {
            return (
                <Nav.Item key={i}>
                    <Nav.Link href={"#" + key} id={key + "-tab"} eventKey={key} role="tab" aria-controls={key}>{key.toUpperCase()}</Nav.Link>
                </Nav.Item>
            )
        } else {
            return "";
        }
    });

    const attributesList = (heroKey) => Object.keys(hero[heroKey]).map((key, index) => {
        let data = hero[heroKey][key];
        if(Array.isArray(data)){
            data = data.toString().replaceAll(",", " , ");
        }
        if(key !== "id" && key !== "image" && key !== "name"){
            return(
                <ListGroup.Item key={index}><h6>{key.toUpperCase()}</h6> {data}</ListGroup.Item>
            );
        }
        else{
            return "";
        }
    });

    const tabContent = Object.keys(hero).map((key, index) => {
        let title, list = undefined;
        if(key === 'powerstats'){
            title = "POWER STATS";
        }
        if ((key !== "id" && key !== "image" && key !== "name")){
            title = key.toUpperCase()
            list = attributesList(key)
        }

        return (
            <Tab.Content key={index}>
                <Tab.Pane eventKey={key}>
                    <Card.Title>{title}</Card.Title>
                    <ListGroup>
                    {list}
                    </ListGroup>
                </Tab.Pane>
            </Tab.Content>
        );
    });

    return (
        <div className="card-container">
            <CardGroup >
                <Card border="light">
                    <Card.Img variant="top" src={hero.image.url}></Card.Img>
                    <Tab.Container defaultActiveKey="powerstats" >
                        <Card.Header>
                            <Nav variant="tabs" >
                                <div className="tablist" role="tablist">
                                    {navItems}
                                </div>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            {tabContent}
                        </Card.Body>
                    </Tab.Container>
                </Card>
            </CardGroup>
        </div >
    );
}

export default Character;