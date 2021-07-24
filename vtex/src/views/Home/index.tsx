import React, { useState, useEffect } from 'react';
import { Container } from './styled';
import api from '../../services/api';
import logo from './images/logo.png';


interface IProduct{
    id:number,
    photo: string,
    description: string,
    price: number
    name: string,
}


const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data);
            }
        )
    }, [])

    const handleCart = ( index: number ) => {

        const productStore = JSON.stringify(data[index])

        localStorage.setItem(`@produto-${index}`, productStore)
        

    }


    return (
        
       <Container>
           <section>
               <img src= {logo} alt="Logo"/>
           </section>
            <section>
               {data.map( (prod, index) => (
                 <div className="product-content" key={prod.id}>
                   <img src={prod.photo} alt='galaxy' width='200' height='auto' />
                   <h4>{prod.name}</h4>
                   <span>{prod.description}</span>
                   <h6>{prod.price}</h6>
                   <button className="button" onClick={()=> handleCart(index)}>Adicionar ao carrinho</button>
                </div>                 
              ))}

            </section>
            
       </Container>
);
}

export default Home;