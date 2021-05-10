import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { get_random_drinks } from '../api';

const RandomDrink = () => {
    const [Drink, setDrink] = useState<any[]>([]);
    useEffect(() => {
        get_random_drinks().then(res => {
            let resp = JSON.parse(JSON.stringify(res))
            console.log(resp)
            setDrink(resp["drinks"])
        })
    }, [])
    return (
        <div>
            {Drink && Drink.map((drink) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={drink.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>{drink.strDrink}</Card.Title>
                        <Card.Text> {drink.strInstructions} <br /> Drink ID : {drink.idDrink}</Card.Text>
                        <Button variant="primary">{drink.strAlcoholic}</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default RandomDrink;
