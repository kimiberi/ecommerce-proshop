import React from 'react'
import { Outlet } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../products'

// console.log("products", products);

const HomeScreen: React.FC = () => {
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