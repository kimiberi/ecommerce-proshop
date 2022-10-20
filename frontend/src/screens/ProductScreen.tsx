import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons';
// import products from '../products'
import Ratings from '../components/Ratings';
import { Button, InputNumber, Space, Image, Skeleton } from 'antd';
// import axios from 'axios';
// import { Dispatch } from 'redux';
// import { useDispatch } from 'react-redux';
// import { ActionType } from '../state/action-types';
// import { ActionAllProducts } from '../state/actions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import Message from '../components/Message';
import { useActions } from '../hooks/useActions';
import blankimage from '../imageInternal/blankimage.jpg'

// import _ from 'lodash';
// import styled from 'styled-components';

// interface PRODUCT {
//     name: string;
//     image: string;
//     description: string;
//     countInStock: number;
//     rating: number;
//     numReviews: number;
//     price: number;
//     [key: string]: string | number | number[];
// }

interface styles {
    buttonBG: {
        background: string;
        color: string;
        marginTop: string;
        width: string;
    }
}

const ProductScreen: React.FC = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState<{ [key: string]: any }>({
        name: '',
        image: '',
        description: '',
        countInStock: 0,
        rating: 0,
        numReviews: 0,
        price: 0,
    });
    const [qty, setQty] = useState<number>(1)
    const [disableQty, setDisableQty] = useState<boolean>(true)

    const styleRules: styles = {
        buttonBG: {
            background: `${!disableQty && '#334155'}`,
            color: `${!disableQty && '#fff'}`,
            marginTop: '15px',
            width: '130px',
        }
    }

    // OPTION 1
    // const product = products.find(item => `/product/${item._id}` === location.pathname);

    // OPTION 3
    const { product, loading, error } = useTypeSelector((state) => state.productDetails); // it came from reducers > index.ts
    // const dispatch: Dispatch<ActionAllProducts> = useDispatch();

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         // OPTION 1
    //         // const { data } = await axios.get(`/api/products`)
    //         // const findProduct = _.find(data, (o) => `/product/${o._id}` === location.pathname)
    //         // setProduct(findProduct);

    //         // OPTION 2
    //         // const { data } = await axios.get(`${location.pathname}`)
    //         // setProduct(data);

    //         // OPTION 3
    //         dispatch({ type: ActionType.PRODUCT_LIST_REQUEST })

    //         try {
    //             const { data } = await axios.get(`${location.pathname}`)
    //             dispatch({
    //                 type: ActionType.PRODUCT_LIST_SUCCESS,
    //                 payload: data
    //             })
    //             setProduct(data);
    //         } catch (err) {
    //             // NOTE: if you get this error:"Object is of type 'unknown'", update the tsconfig.json
    //             // tsconfig.json -> "useUnknownInCatchVariables": false
    //             // works only on Typescript v4.4 or higher
    //             dispatch({
    //                 type: ActionType.PRODUCT_LIST_ERROR,
    //                 payload: err.message
    //             })
    //         }
    //     }
    //     fetchProduct()
    // }, [dispatch, location])

    // useEffect(() => {
    //     setProduct(products);
    // }, [products])

    // OPTION 4
    const { productRepositories } = useActions();
    useEffect(() => {
        productRepositories(location.pathname)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log("product", product);
        setProductDetails(product)

        if (productDetails.countInStock > 0) {
            setDisableQty(false)
        }
        if (!qty) {
            setQty(1)
        }
    }, [product, productDetails.countInStock, qty])

    // console.log('location.pathname', location.pathname);
    // console.log("productDetails", productDetails);

    return (
        <>
            <div className="flex gap-2 text-gray-500 font-bold tracking-wide uppercase">
                <i><LeftOutlined /></i>
                <p onClick={() => navigate(-1)} className='mt-0.5 cursor-pointer'>Go Back</p>
            </div>

            {error ? (<Message msg={error} />) : (
                <>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 content-center">
                        <div><Image width='300' height='600' preview={false} alt={!loading ? productDetails?.name : 'no image available'} src={`${!loading ? productDetails?.image : 'error'}`} fallback={blankimage} /></div>
                        <Skeleton loading={loading} active style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='grid content-center'>
                                <h2 className='text-2xl uppercase font-bold'>{productDetails?.name}</h2>
                                <div className='flex items-center'>
                                    <Ratings rating={Number(productDetails?.rating)} />
                                    <span className='pt-1'>{productDetails?.numReviews} reviews</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div className='text-xl font-bold'>$ {productDetails?.price}</div>
                                    <div className='flex items-center gap-2'>
                                        <span className='font-semibold'>Status</span>
                                        {Number(productDetails?.countInStock) > 0 ? (<span className='text-green-600 font-semibold'>In Stock</span>) : (<span className='text-red-600 font-semibold'>Sold Out</span>)}
                                    </div>
                                </div>

                                <h3 className='text-lg pt-14'>Description:</h3>
                                <p className='mb-10'>{productDetails?.description}</p>

                                {Number(productDetails?.countInStock) > 0 && (
                                    <Space>
                                        <InputNumber
                                            type='number'
                                            min={1}
                                            max={productDetails?.countInStock}
                                            value={qty}
                                            onChange={(e) => setQty(e)}
                                        />
                                        <span>{Number(productDetails?.countInStock)} pcs available</span>
                                    </Space>
                                )}

                                <Button
                                    disabled={disableQty}
                                    value="large"
                                    style={styleRules.buttonBG}
                                    className='uppercase'
                                    onClick={() => navigate(`/cart/${productDetails?._id}?qty=${qty}`)}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </Skeleton>
                    </div>
                </>
            )
            }
        </>
    )
}

export default ProductScreen