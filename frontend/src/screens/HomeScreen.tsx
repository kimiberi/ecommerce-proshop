import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
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
    // const [products, setProducts] = useState<any>([]);
    const { productRepositories } = useActions();
    const { products, loading, error } = useTypeSelector((state) => state.productList); // it came from reducers > index.ts

    useEffect(() => {
        productRepositories()
    }, [])
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const { data } = await axios.get('/api/products')
    //         setProducts(data);
    //     }
    //     fetchProducts()
    // }, [])
    // [] -> means when you put variable there and everytime it make changes then it fire up all inside the useEffect()
    // console.log('products', products);

    return (
        <>
            <h2 className='text-2xl font-bold tracking-wide uppercase pb-4'>Latest Products</h2>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {loading ? (<h2>Loading...</h2>) :
                    error ? (<h2>{error}</h2>) :
                        _.map(products, (item: any, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    id={item._id}
                                    name={item.name}
                                    image={item.image}
                                    rating={item.rating}
                                    reviews={item.numReviews}
                                    price={item.price}
                                />
                            )
                        })}
                {/* {products.map((item, index) => (
                    <ProductCard
                        key={index}
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        rating={item.rating}
                        reviews={item.numReviews}
                        price={item.price}
                    />
                ))} */}
            </div>
            <Outlet />
        </>
    )
}

export default HomeScreen