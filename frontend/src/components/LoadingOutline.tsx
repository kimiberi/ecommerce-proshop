import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const loadingIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;

const LoadingOutline = () => {
    return (
        <div className='text-center'><Spin indicator={loadingIcon} /></div>
    )
}

export default LoadingOutline