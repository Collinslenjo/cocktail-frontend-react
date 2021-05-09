const api_key = 1
const base_url = "https://www.thecocktaildb.com/api/json/v1/"+api_key;



export const get_random_drinks = () => {
    return fetch(base_url+"/random.php",
    {
        method: "GET"
    }).then(res => res.json())
}

export const get_latest_drinks = () => {
    return fetch(base_url+"/latest.php",
    {
        method: "GET"
    }).then(res => res.json())
}

export const get_single_drink = (drink_id: number) => {
    return fetch(base_url+"/lookup.php?i="+drink_id,
    {
        method: "GET",
    }).then(res => res.json())
}
