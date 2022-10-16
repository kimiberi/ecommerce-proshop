import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons';
// import products from '../products'
import Ratings from '../components/Ratings';
import { Button } from 'antd';
import axios from 'axios';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { ActionType } from '../state/action-types';
import { Action } from '../state/actions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import Loader from '../components/Loader';
import Message from '../components/Message';
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

    // OPTION 1
    // const product = products.find(item => `/product/${item._id}` === location.pathname);

    // OPTION 3
    const { loading, error } = useTypeSelector((state) => state.productList); // it came from reducers > index.ts
    const dispatch: Dispatch<Action> = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            // OPTION 1
            // const { data } = await axios.get(`/api/products`)
            // const findProduct = _.find(data, (o) => `/product/${o._id}` === location.pathname)
            // setProduct(findProduct);

            // OPTION 2
            // const { data } = await axios.get(`${location.pathname}`)
            // setProduct(data);

            // OPTION 3
            dispatch({ type: ActionType.PRODUCT_LIST_REQUEST })

            try {
                const { data } = await axios.get(`${location.pathname}`)
                dispatch({
                    type: ActionType.PRODUCT_LIST_SUCCESS,
                    payload: data
                })
                setProduct(data);
            } catch (err) {
                // NOTE: if you get this error:"Object is of type 'unknown'", update the tsconfig.json
                // tsconfig.json -> "useUnknownInCatchVariables": false
                // works only on Typescript v4.4 or higher
                dispatch({
                    type: ActionType.PRODUCT_LIST_ERROR,
                    payload: err.message
                })
            }
        }
        fetchProduct()
    }, [dispatch, location])

    // useEffect(() => {
    //     setProduct(products);
    // }, [products])

    // console.log("product", product);
    // console.log('location.pathname', location.pathname);
    // console.log("products", products);

    return (
        <>
            <div className="flex gap-2 text-gray-500 font-bold tracking-wide uppercase">
                <i><LeftOutlined /></i>
                <p onClick={() => navigate(-1)} className='mt-0.5 cursor-pointer'>Go Back</p>
            </div>

            {loading ? (<Loader />) :
                error ? (<Message msg={error} />) : (
                    <>
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
        </>
    )
}

export default ProductScreen