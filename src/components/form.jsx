import './form.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchHero } from '../Redux/Actions';


const FormComponent = () => {

    const [hero, setHero] = useState("");
    const dispatch = useDispatch();

    const handleOnClick = (hero) => {
        dispatch(searchHero(hero));
        setHero("");
    };
   

    return (
        <div>
            <Form>
                <Form.Label aria-label="search">Search:</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Control size="lg" type="text" placeholder="Search Hero/Villain"
                        aria-label="search hero or villain" value={hero}
                        onChange={(event) => setHero(event.target.value)}/>
                    <Link to={"/Search"}>
                        <Button variant="primary" size="lg" onClick={() => handleOnClick(hero)}>
                            Search
                        </Button>
                    </Link>
                </Form.Group>
            </Form>

        </div>
    );
}

export default FormComponent;