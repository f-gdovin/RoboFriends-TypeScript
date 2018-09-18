import * as React from 'react';

class Header extends React.Component {

    public shouldComponentUpdate() {
        return false;
    };

    public render() {
        return <h1 className='f1'>RoboFriends</h1>;
    }
}
export default Header;