import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons';
// import products from '../products'
import Ratings from '../components/Ratings';
import { Button } from 'antd';
import axios from 'axios';
// import _ from 'lodash';

interface PRODUCT {
    name: string;
    image: string;
    description: string;
    countInStock: number;
    rating: number;
    numReviews: number;
    price: number;
}

const ProductScreen: React.FC = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const [product, setProduct] = useState<PRODUCT>({
        name: '',
        image: '',
        description: '',
        countInStock: 0,
        rating: 0,
        numReviews: 0,
        price: 0,
    });
    // const product = products.find(item => `/product/${item._id}` === location.pathname);

    useEffect(() => {
        const fetchProduct = async () => {
            // const { data } = await axios.get(`/api/products`)
            // const findProduct = _.find(data, (o) => `/product/${o._id}` === location.pathname)
            // setProduct(findProduct);

            const { data } = await axios.get(`/api${location.pathname}`)
            setProduct(data);
        }
        fetchProduct()
    }, [location])

    // console.log("product", product);

    return (
        <>
            <div onClick={() => navigate(-1)} className="flex gap-2 cursor-pointer text-gray-500 font-bold tracking-wide uppercase">
                <div><LeftOutlined /></div>
                <p className='mt-0.5'>Go Back</p>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 content-center">
                <div><img alt={product?.name} src={product?.image} /></div>
                <div className='grid content-center'>
                    <h2 className='text-2xl uppercase font-bold'>{product?.name}</h2>
                    <div className='flex items-center'>
                        <Ratings rating={Number(product?.rating)} />
                        <span className='pt-1'>{product?.numReviews} reviews</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className='text-xl font-bold'>$ {product?.price}</div>
                        <div className='flex items-center gap-2'>
                            <span className='font-semibold'>Status</span>
                            {Number(product?.countInStock) > 0 ? 'In Stock' : 'Sold Out'}
                        </div>
                    </div>

                    <h3 className='text-lg pt-14'>Description:</h3>
                    <p>{product?.description}</p>
                    <Button value="large" style={{ background: '#334155', color: '#fff', marginTop: '20px', width: '130px', textTransform: 'uppercase' }}>
                        Add To Cart
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ProductScreen