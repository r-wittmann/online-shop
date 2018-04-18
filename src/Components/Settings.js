import React, { Component } from 'react';

const colors = [
    { key: 'red', name: 'BRDX', code: 'a02d3a' },
    { key: 'midnight', name: 'MDNGHT', code: '2f3672' },
    { key: 'lightblue', name: 'CRBBN', code: '33a8ca' },
    { key: 'white', name: 'WHTE', code: 'e5e3e8' },
    { key: 'black', name: 'BLCK', code: '212121' }
];

const sizes = [
    { key: 1000, name: '1000 ml' },
    { key: 750, name: '750 ml' },
    { key: 500, name: '500 ml' },
];

class Settings extends Component {
    state = {
        settingsVisible: false,
        currentColor: 'red',
        currentSize: 1000,
    };

    handleColorPick(event, colorKey) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ currentColor: colorKey }, () => this.changeFlsk());
    }

    handleSizePick(event, sizeKey) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ currentSize: sizeKey }, () => this.changeFlsk());
    }

    handleSettingClick() {
        this.setState({ settingsVisible: !this.state.settingsVisible })
    }

    changeFlsk() {
        this.props.changeFlsk(`${this.state.currentColor}_${this.state.currentSize}_`)
    }

    render() {
        return (
            <div>
                {this.state.settingsVisible &&
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        zIndex: 20,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        paddingBottom: 56,
                    }}
                    onClick={() => this.handleSettingClick()}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        padding: '16px 8px 8px 16px',
                        backgroundColor: this.state.settingsVisible ? 'rgba(255,255,255,0.9)' : 'transparent'
                    }}>
                        {this.state.settingsVisible &&
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginRight: 32
                                }}>
                                {sizes.map(size => {
                                    return <div key={size.key}
                                                style={{
                                                    display: 'flex',
                                                    width: size.key / 20 + 60,
                                                    marginBottom: 12,
                                                    textAlign: 'center'
                                                }}
                                                onClick={(event) => this.handleSizePick(event, size.key)}>
                                        <div style={{
                                            width: '100%',
                                            border: '2px solid #262826',
                                            borderRadius: 40,
                                            padding: 8,
                                            color: this.state.currentSize === size.key ? 'white' : 'black',
                                            backgroundColor: this.state.currentSize === size.key ? '#262826' : 'transparent',
                                        }}>
                                            {size.name}
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {colors.map(color => {
                                    return <div key={color.key} style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                        marginBottom: 16
                                    }}
                                                onClick={(event) => this.handleColorPick(event, color.key)}>
                                        <div style={{ marginRight: 8 }}>{color.name}</div>
                                        <div style={{
                                            width: 40,
                                            height: 40,
                                            border: '2px solid #262826',
                                            borderRadius: 40,
                                            backgroundColor: '#' + color.code,
                                        }}/>
                                    </div>
                                })}
                            </div>
                        </div>
                        }
                        </div>
                </div>
                }
                <div style={{ position: 'absolute', bottom: 56, right: 8, backgroundColor: 'rgba(255,255,255,0.9' }}>

                </div>
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    height: 56,
                    alignItems: 'center'
                }}
                     className='py-2'>
                    {this.props.group > 2 &&
                    <div style={{
                        border: '2px solid #262826',
                        borderRadius: 40,
                        padding: '4px 16px',
                    }}
                         onClick={() => this.props.toggleAR()}>
                        {this.props.arActive ? 'Augmented Reality beenden' : 'Augmented Reality starten'}
                    </div>
                    }
                    <div style={{ borderRadius: 60, padding: 4 }}
                         onClick={() => this.handleSettingClick()}>
                    <span
                        className='material-icons md-24'>{this.state.settingsVisible ? 'close' : 'brush'}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;
