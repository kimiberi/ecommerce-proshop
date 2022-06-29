import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
// import products from '../products'

interface PRODUCTS {
    _id: string;
    name: string;
    image: string;
    rating: number;
    numReviews: number;
    price: number;
}


// console.log("products", products);

const HomeScreen: React.FC = () => {
    const [products, setProducts] = useState<PRODUCTS[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')
            setProducts(data);
        }
        fetchProducts()
    }, [])
    // [] -> means when you put variable there and everytime it make changes then it fire up all inside the useEffect()

    return (
        <>
            <h2 className='text-2xl font-bold tracking-wide uppercase pb-4'>Latest Products</h2>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {products.map((item, index) => (
                    <ProductCard
                        key={index}
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        rating={item.rating}
                        reviews={item.numReviews}
                        price={item.price}
                    />
                ))}
            </div>
            <Outlet />
        </>
    )
}

export default HomeScreen