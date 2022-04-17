import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
function Productinfo(){
    const params=useParams();
    const [productid,setProductid]=useState([]);
    const featchonlyProduct = ()=>{
        
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(json=>setProductid(json));
            
    }
    useEffect( ()=>
    {
        featchonlyProduct()
    },[]) 
    return(
       <div>
      <h3 className="text-center m-4" >Product Information </h3>  
      <Card style={{ width: '18rem' }} key={productid.id} className="text-center mx-auto">
                        <Card.Img variant="top" className="w-50  mx-auto p-3" src={productid.image} />
                        <Card.Body>
                          <Card.Title className="text-primary">{productid.category}</Card.Title>
                          <Card.Text>
                           {productid.description}
                          </Card.Text>
                          <Card.Text className="text-primary" >
                           {productid.price}
                          </Card.Text>

                         
                        </Card.Body>
                      </Card>
       </div>
       

    );
    
}
export default  Productinfo;