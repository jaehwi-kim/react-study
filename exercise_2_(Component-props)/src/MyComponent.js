import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };

    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    };

    render() {
        const { name, favoriteNumber, children } = this.props; // 비구조화 할당
        return (
            <div>
                내이름은 {name} 이고 <br/>
                children값은 {children} 이며 <br/>
                숫자는 {favoriteNumber}다.
            </div>
        );
    }
}

export default MyComponent;
