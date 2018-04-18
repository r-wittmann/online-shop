import React, { Component } from 'react';

class ARComponent extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <embed style={{ width: '100%', height: '100%' }} src={'./ar-index.html'}/>
            </div>
        );
    }
}

export default ARComponent;
