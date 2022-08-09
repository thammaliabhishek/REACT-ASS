import React, { Component } from 'react';

class Class extends Component {
    render() {
        return (
            <div className='cls'>
                <h2>This is created using the Class Component</h2>
                <p>This is done using external CSS</p>
                <p style={{ color: 'blue' }}>This is done using internal CSS</p>
            </div>
        );
    }
}
export default Class;