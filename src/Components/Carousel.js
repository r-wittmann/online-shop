import React, { Component } from 'react';
import ImageService from "../image-service";

class Carousel extends Component {
    render() {
        return (
            <div>
                {this.props.group % 2 === 0
                    ? (
                        <div id='carouselIndicators' className='carousel slide carousel-fade' data-interval='false'
                             style={{ backgroundColor: 'lightgrey' }}>
                            <ol className='list-inline d-flex justify-content-center'
                                style={{ position: 'absolute', left: 0, right: 0, bottom: -50, zIndex: 15 }}>
                                <li data-target='#carouselIndicators' data-slide-to='0'
                                    className='active list-inline-item border border-light'
                                    style={{ backgroundColor: 'white' }}>
                                    <img style={{ width: 52, height: 52 }} className='rounded'
                                         src={ImageService.getImageUrl(`${this.props.flsk}1`)} alt='thumbnail 1'/>
                                </li>
                                <li data-target='#carouselIndicators' data-slide-to='1'
                                    className='list-inline-item border border-light'
                                    style={{ backgroundColor: 'white' }}>
                                    <img style={{ width: 52, height: 52 }} className='rounded'
                                         src={ImageService.getImageUrl(`${this.props.flsk}2`)} alt='thumbnail 2'/>
                                </li>
                                <li data-target='#carouselIndicators' data-slide-to='2'
                                    className='list-inline-item border border-light'
                                    style={{ backgroundColor: 'white' }}>
                                    <img style={{ width: 52, height: 52 }} className='rounded'
                                         src={ImageService.getImageUrl(`${this.props.flsk}3`)} alt='thumbnail 3'/>
                                </li>
                                <li data-target='#carouselIndicators' data-slide-to='3'
                                    className='list-inline-item border border-light'
                                    style={{ backgroundColor: 'white' }}>
                                    <img style={{ width: 52, height: 52 }} className='rounded'
                                         src={ImageService.getImageUrl(`${this.props.flsk}4`)} alt='thumbnail 4'/>
                                </li>
                            </ol>
                            <div className='carousel-inner'>
                                <div className='carousel-item active'>
                                    <img className='d-block'
                                         style={{ width: '80%', margin: 'auto' }}
                                         src={ImageService.getImageUrl(`${this.props.flsk}1`)}
                                         alt='First slide'/>
                                </div>
                                <div className='carousel-item'>
                                    <img className='d-block'
                                         style={{ width: '80%', margin: 'auto' }}
                                         src={ImageService.getImageUrl(`${this.props.flsk}2`)}
                                         alt='Second slide'/>
                                </div>
                                <div className='carousel-item'>
                                    <img className='d-block'
                                         style={{ width: '80%', margin: 'auto' }}
                                         src={ImageService.getImageUrl(`${this.props.flsk}3`)}
                                         alt='Third slide'/>
                                </div>
                                <div className='carousel-item'>
                                    <img className='d-block'
                                         style={{ width: '80%', marginLeft: '20%' }}
                                         src={ImageService.getImageUrl(`${this.props.flsk}4`)}
                                         alt='Third slide'/>
                                </div>
                            </div>
                            <a className='carousel-control-prev' href='#carouselIndicators' role='button'
                               data-slide='prev'>
                                <span className='carousel-control-prev-icon' aria-hidden='true'/>
                                <span className='sr-only'>Previous</span>
                            </a>
                            <a className='carousel-control-next' href='#carouselIndicators' role='button'
                               data-slide='next'>
                                <span className='carousel-control-next-icon' aria-hidden='true'/>
                                <span className='sr-only'>Next</span>
                            </a>
                        </div>
                    ) : (
                        <div style={{ backgroundColor: 'lightgrey' }}>
                            <img className='d-block'
                                 style={{ width: '80%', margin: 'auto' }}
                                 src={ImageService.getImageUrl(`${this.props.flsk}1`)}
                                 alt='First slide'/>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Carousel;
