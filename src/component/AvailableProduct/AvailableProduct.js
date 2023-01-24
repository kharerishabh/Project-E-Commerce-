import React from "react";
import { Card } from "react-bootstrap";

const Product_Arr = [

    {
    id: 'm1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
    id: 'm2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    id: 'm3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    {
    id: 'm4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]

const AvailableProduct = () => {
    const Products = Product_Arr.map((product) => {
       return (<li>
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        imageUrl={product.imageUrl}
       </li>)
    })
    return (
        <>
        <ul>
            <Card>
                <h2>Music</h2>
        {Products}
        </Card>
        </ul>
        </>
    )
}

export default AvailableProduct