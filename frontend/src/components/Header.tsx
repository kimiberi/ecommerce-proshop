import React from 'react'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <div className='h-20 grid content-center bg-slate-700'>
            <div className='md:container md:mx-auto flex justify-between text-slate-300'>
                <div className='text-xl font-bold'>PROSHOP</div>

                <div className='grid content-center'>
                    <div className='flex justify-between w-40'>
                        <span><ShoppingCartOutlined style={{ fontSize: '18px', color: '#fff', paddingRight: '6px' }} />CART</span>
                        <span><UserOutlined style={{ fontSize: '18px', color: '#fff', paddingRight: '6px' }} />SIGN IN</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header