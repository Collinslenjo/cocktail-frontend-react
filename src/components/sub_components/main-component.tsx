import React, { useEffect, useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { get_random_drinks } from '../api';

const MainComponent = () => {
    const [Drink, setDrink] = useState<any[]>([]);
    useEffect(() => {
        let random_drinks: any[] = []
        for (let count = 0; count < 5; count++) {
            get_random_drinks().then(res => {
                let resp = JSON.parse(JSON.stringify(res))
                random_drinks.push(resp["drinks"][0])
            })
        }
        setTimeout(() => {
            setDrink(random_drinks)
        }, 2000);

    }, [])
    return (
        <div className="row">
            {Drink.map((drink) => (
                <Card style={{ width: '18rem' }} key={drink.idDrink}>
                    <Card.Img variant="top" src={drink.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>{drink.strDrink}</Card.Title>
                        <Card.Text> {drink.strInstructions} <br /> Drink ID : {drink.idDrink}</Card.Text>
                        <Nav.Link href={"/view?drink_id="+drink.idDrink}>
                        <Button variant="primary">View Drink</Button>
                        </Nav.Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default MainComponent;
