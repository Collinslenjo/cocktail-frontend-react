import React, { useEffect, useState } from 'react';
import { get_random_drinks } from '../api';

const MainComponent = () => {
    const [Drink, setDrink] = useState<any[]>([]);
    useEffect(() => {
        get_random_drinks().then(res => {
            let resp = JSON.parse(JSON.stringify(res))
            console.log(resp)
            setDrink(resp["drinks"])
        })
    }, [])
    return (
        <>{Drink && Drink.map((drink) => (
            <h1>{drink}</h1>
        ))}</>
    )
}

export default MainComponent;
