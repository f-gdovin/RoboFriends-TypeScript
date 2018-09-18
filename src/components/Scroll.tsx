import * as React from 'react';

interface IScrollProps {
    children?: JSX.Element;
}

const Scroll: React.SFC<IScrollProps> = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: 'calc(100vh - 190px)' }}>
            { props.children }
        </div>
    );
};
export default Scroll;