import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { get_single_drink } from '../api';

const CocktailView = () => {
    const [Drink, setDrink] = useState<any[]>([]);
    // let { drink_id: number } = useParams();
    useEffect(() => {
        let params = new URLSearchParams(window.location.search)
        let drink_id = params.get('drink_id') || "0"
        get_single_drink(parseInt(drink_id)).then(res => {
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
                        <Card.Text>Detailed View <hr /> {drink.strInstructions} <br /> Drink ID : {drink.idDrink}</Card.Text>
                        <Button variant="primary">{drink.strAlcoholic}</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default CocktailView;
