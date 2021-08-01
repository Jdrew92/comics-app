import './form.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import Cards from './cards';

const FormComponent = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [word, setWord] = useState("");
    const [searched, setSearched] = useState([]);

    let handleOnClick = () => {
        fetch("https://www.superheroapi.com/api.php/10226523289976622/search/" + word)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setSearched(result.results);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    return (
        <div>
            <Form>
                <Form.Label aria-label="search">Search:</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Control size="lg" type="text" placeholder="Search Hero/Villain"
                        aria-label="search hero or villain" onChange={(event) => setWord(event.target.value)} />
                    <Button variant="primary" onClick={handleOnClick}>Search</Button>
                </Form.Group>
            </Form>
            <div className="half">
                <Cards searched={searched} />
            </div>
        </div>
    );
}

export default FormComponent;