import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className='navbar navbar-dark bg-dark box-shadow'>
                    <div className='container-fluid d-flex justify-content-between'>
                        <a className='navbar-brand' href='#'>Cooler Shop</a>
                        <button type='button' className='navbar-toggler collapsed' data-toggle='collapse'
                                data-target='#myNavbar'>
                            <span className='navbar-toggler-icon'/>
                        </button>
                        <div className='collapse navbar-collapse' id='myNavbar'>
                            <ul className='nav navbar-nav text-light'>
                                <li className='active text-white'><a href='#' className='text-white '>Home</a></li>
                                <li className='text-gray'><a href='#' className='text-muted'>Experiment Beenden</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
