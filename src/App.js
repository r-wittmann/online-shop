import React, { Component } from 'react';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Settings from './Components/Settings';
import Description from './Components/Description';

import qs from 'query-string';
import ARComponent from "./Components/ARComponent";

/**
 * interactivity |   low   |  high
 * --------------+---------+---------
 *     no AR     | group 1 | group 2
 * --------------+---------+---------
 *    with AR    | group 3 | group 4
 *
 *    group 1: /?group=a4f47bd3-d336-4315-b9ff-8bafbff5f6e1
 *    group 2: /?group=91458e30-7b9f-4df1-9c92-c1da412ae90b
 *    group 3: /?group=ad183221-4784-41e3-b075-4fbdb6e6b7b4
 *    group 4: /?group=92fe1b73-ea37-41d2-9125-f18914eeb94e
 */

class App extends Component {
    constructor(props) {
        super(props);
        let group = 1;
        switch (qs.parse(window.location.search).group) {
            case 'a4f47bd3-d336-4315-b9ff-8bafbff5f6e1':
            case '1':
                group = 1;
                break;
            case '91458e30-7b9f-4df1-9c92-c1da412ae90b':
            case '2':
                group = 2;
                break;
            case 'ad183221-4784-41e3-b075-4fbdb6e6b7b4':
            case '3':
                group = 3;
                break;
            case '92fe1b73-ea37-41d2-9125-f18914eeb94e':
            case '4':
                group = 4;
                break;
            default:
                group = 1;
                break
        }
        this.state = {
            flsk: 'red_1000_',
            group: group,
            arActive: false,
        };
        window.flsk = this.state.flsk;

        this.changeFlsk = this.changeFlsk.bind(this);
        this.toggleAR = this.toggleAR.bind(this);
    };

    changeFlsk(flsk) {
        window.flsk = flsk;
        this.setState({ flsk });
    }

    toggleAR() {
        this.setState({ arActive: !this.state.arActive })
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <Header group={this.state.group}/>
                <div style={{ height: 'calc(100% - 112px)', width: '100%' }}>
                    {this.state.arActive
                        ? <ARComponent flsk={this.state.flsk}/>
                        : <div>
                            <Carousel flsk={this.state.flsk}
                                      group={this.state.group}/>
                            <Description/>
                        </div>
                    }
                </div>
                <Settings changeFlsk={this.changeFlsk}
                          arActive={this.state.arActive}
                          toggleAR={this.toggleAR}
                          group={this.state.group}/>
            </div>
        );
    }
}

export default App;
