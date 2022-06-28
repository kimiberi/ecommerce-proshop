import React from 'react'
import { StarFilled, StarOutlined } from '@ant-design/icons';

interface PROPS {
    rating: number;
}

const Ratings: React.FC<PROPS> = ({ rating }: PROPS) => {
    return (
        <div style={{ paddingRight: '6px' }}>
            {new Array(5).fill(null).map((_, index) => {
                return (
                    <span key={index}>
                        {index + 1 <= rating ? <StarFilled style={{ fontSize: '18px', color: '#FFC000' }} /> : <StarOutlined style={{ fontSize: '18px', color: '#FFC000' }} />}
                    </span>
                );
            })}
        </div>
    )
}

export default Ratings