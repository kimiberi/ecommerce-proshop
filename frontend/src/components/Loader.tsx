import React from 'react'
import { Spin } from 'antd';

const Loader: React.FC = () => {
    return (
        <div className='text-center'><Spin size="large" tip="Loading..." /></div>
    )
}

export default Loader