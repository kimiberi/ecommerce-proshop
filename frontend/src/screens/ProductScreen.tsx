import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons';
import products from '../products'
import Ratings from '../components/Ratings';
import { Button } from 'antd';

interface PROPS {
    id: string;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    price: number;
}

const ProductScreen: React.FC = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const product = products.find(item => `/product/${item._id}` === location.pathname);

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