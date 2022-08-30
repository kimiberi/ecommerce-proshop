import React from 'react';

import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import Ratings from './Ratings';
interface PROPS {
    id: string;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    price: number;
}

const ProductCard: React.FC<PROPS> = (props: PROPS) => {
    const { id, name, image, rating, reviews, price } = props;
    const navigate = useNavigate();

    return (
        <Card
            hoverable
            title={name}
            cover={<img width='300' height='600' alt={name} src={image} />}
            onClick={() => navigate(`/api/products/${id}`)}
        >
            <div className='grid content-center'>
                <div className='flex justify-between'>
                    <Ratings
                        rating={rating}
                    />
                    <div>{reviews} reviews</div>
                </div>
            </div>


            <div className='text-xl font-bold pt-4'>$ {price}</div>
        </Card>
    )
}

export default ProductCard