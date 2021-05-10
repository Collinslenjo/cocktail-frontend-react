import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const CustomDrink = () => {
    const [customDrinks, setcustomDrinks] = useState<any[]>([]);

    useEffect(() => {
        let drinks = localStorage.getItem("custom_drinks") || ""
        let json_data = JSON.parse(drinks);
        let drink_arr = []
        for (let json of json_data){
            drink_arr.push(JSON.parse(json))
        }
        setcustomDrinks(drink_arr)
    }, [])
    return (
        <div className="row">
            {customDrinks && customDrinks.map((cocktail) => (
                <Card style={{ width: '18rem' }} key={cocktail.drink_id}>
                    <Card.Body>
                        <Card.Title>{cocktail.cocktail_name}</Card.Title>
                        <Card.Text>
                            {cocktail.drink_id}
                            {cocktail.cocktail_type}
                            {cocktail.cocktail_details}
                    </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default CustomDrink;
