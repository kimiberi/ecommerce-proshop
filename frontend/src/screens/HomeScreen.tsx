import axios from 'axios';
import _ from 'lodash';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Dispatch } from 'redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCard from '../components/ProductCard';
// import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { ActionType } from '../state/action-types';
import { Action } from '../state/actions';
// import products from '../products'

// interface PRODUCTS {
//     _id: string;
//     name: string;
//     image: string;
//     rating: number;
//     numReviews: number;
//     price: number;
// }

const HomeScreen: React.FC = () => {
    const { products, loading, error } = useTypeSelector((state) => state.productList); // it came from reducers > index.ts

    // OPTION 3 - Direct dispatch
    const dispatch: Dispatch<Action> = useDispatch();
    useEffect(() => {
        const fetchProducts = async () => {
            dispatch({ type: ActionType.PRODUCT_LIST_REQUEST })

            try {
                const { data } = await axios.get('/api/products')
                dispatch({
                    type: ActionType.PRODUCT_LIST_SUCCESS,
                    payload: data
                })
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
        fetchProducts()
    }, [dispatch])

    // OPTION 2 - pwede lang pala to function Array sa may eventState nangyayari pero not advisable sa useEffect()
    // const { productRepositories } = useActions();
    // useEffect(() => {
    //     productRepositories()
    // }, [])

    // OPTION 1
    // const [products, setProducts] = useState<any>([]);
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const { data } = await axios.get('/api/products')
    //         setProducts(data);
    //     }
    //     fetchProducts()
    // }, [])
    // [] -> means when you put variable there and everytime it make changes then it fire up all inside the useEffect()

    console.log('products', products);

    return (
        <>
            <h2 className='text-2xl font-bold tracking-wide uppercase pb-4'>Latest Products</h2>

            {loading ? (<Loader />) :
                error ? (<Message msg={error} />) : (
                    <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                        {_.map(products, (item: any, index) => {
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
                    </div>
                )
            }
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
            <Outlet />
        </>
    )
}

export default HomeScreen