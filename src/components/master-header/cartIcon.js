import React from 'react';
import logo from './carticon.png';

export default class CartIcon extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} width="20px" />
            </div>
        )
    }
}