import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
function Shop(){
    const [product,setProduct]=useState([]);
    const featchProduct = ()=>{
        
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json));
            
    }
    useEffect( ()=>
    {
        featchProduct()
    },[]) 
    return (
        <div>
            <h2 className="text-center m-5"> Products </h2>
            <div className="div-list row justify-content-center">
                {
                    product.map(product =>{
                        return <Card style={{ width: '18rem' }} key={product.id} className="text-center m-3">
                        <Card.Img variant="top" className="w-50  mx-auto p-3" src={product.image} />
                        <Card.Body>
                          <Card.Title>{product.category}</Card.Title>
                          <Card.Text>
                           {product.description}
                          </Card.Text>
                          <Link to={`/shop/${product.id}`} className="btn btn-primary">More Details</Link>
                        </Card.Body>
                      </Card>
                    })
                }
            </div>
        </div>
    );
}
export default Shop;