import React from 'react';
import Menu from './Menu';
import { useParams } from 'react-router-dom';

const ProductPage = () => {

    // passing parameters through Connector
    let {id, name} = useParams()

    return (
        <div>
            <Menu/>
            <h1>This is Product Page</h1>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
        </div>
    );
};

export default ProductPage;