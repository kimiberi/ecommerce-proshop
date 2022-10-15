import React from 'react'
import { Button, Result } from 'antd';

interface RepositoriesState {
    msg: string;
}

const Message: React.FC<RepositoriesState> = (props: RepositoriesState) => {
    return (
        <Result
            status="404"
            title="404"
            subTitle={props.msg}
            extra={<Button type="primary">Back Home</Button>}
        />
    )
}

export default Message