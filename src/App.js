import React, { Component } from 'react';
import Carousel from './Components/Carousel';
import Settings from './Components/Settings';
import Description from './Components/Description';
import ARComponent from './Components/ARComponent';

import qs from 'query-string';

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
            flsk: 'red_500_',
            group: group,
            arActive: false,
            callback: 'https://lmubwl.eu.qualtrics.com/jfe/form/SV_cGFC0rtpIyXyHd3',
            flskChanges: 0,
            arToggles: 0,
            productImageChanges: 0,
            arRetentionRate: 0,
            startTime: new Date(),
        };
        window.flsk = this.state.flsk;

        this.changeFlsk = this.changeFlsk.bind(this);
        this.toggleAR = this.toggleAR.bind(this);
        this.changeProductImage = this.changeProductImage.bind(this);
        this.endExperiment = this.endExperiment.bind(this);
    };

    changeFlsk(flsk) {
        console.log(flsk);
        window.flsk = flsk;
        this.setState({ flsk, flskChanges: this.state.flskChanges + 1 });
    }

    toggleAR() {
        if (this.state.arActive) {
            let arRetentionRate = (new Date() - this.state.arStartTime) / 1000;
            this.setState({ arRetentionRate: this.state.arRetentionRate + arRetentionRate })
        } else {
            this.setState({ arStartTime: new Date() })
        }
        this.setState({ arActive: !this.state.arActive, arToggles: this.state.arToggles + 1 });
    }

    changeProductImage() {
        this.setState({ productImageChanges: this.state.productImageChanges + 1 });
    }

    endExperiment() {
        let parameters = {
            group: this.state.group,
            arToggles: this.state.arToggles,
            flskChanges: this.state.flskChanges,
            productImageChanges: this.state.productImageChanges,
            arRetentionRate: Math.round(this.state.arRetentionRate),
            retentionRate: Math.round((new Date() - this.state.startTime) / 1000),
            flsk: this.state.flsk
        };

        if (this.state.arActive) {
            parameters.arRetentionRate += Math.round((new Date() - this.state.arStartTime) / 1000);
        }
        window.location.href = this.state.callback + '/?' + qs.stringify(parameters)
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <div className={'content'}>
                    <div style={{ height: 'calc(100% - 58px)', width: '100%' }}>
                        {!this.state.arActive &&
                        <div>
                            <Carousel flsk={this.state.flsk}
                                      group={this.state.group}
                                      changeProductImage={this.changeProductImage}/>
                            <Description/>
                        </div>
                        }
                        {this.state.group > 2 &&
                        <div style={{ height: this.state.arActive ? null : 0, width: this.state.arActive ? null : 0 }}>
                            <ARComponent flsk={this.state.flsk}/>
                        </div>
                        }
                    </div>
                    <Settings changeFlsk={this.changeFlsk}
                              arActive={this.state.arActive}
                              toggleAR={this.toggleAR}
                              group={this.state.group}
                              endExperiment={this.endExperiment}/>
                </div>
                <div className={'error-message'}>
                    Bitte ein Smartphone im Hochformat nutzen
                </div>
            </div>
        );
    }
}

export default App;
