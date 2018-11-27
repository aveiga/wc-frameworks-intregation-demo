import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Chart } from "react-charts";
import { setInterval } from "timers";


class CustomGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: [[0, 0]]
        }

        // Note: this is how to dispatch a Custom Event
        // setInterval(() => {
        //     ReactDOM.findDOMNode(this).dispatchEvent(new CustomEvent('reactevent', {
        //         detail: {
        //             name: 'react',
        //             data: this.rows
        //         },
        //         bubbles: true,
        //         composed: true
        //     }));
        // }, 1000);
    }

    addValues(values) {
        if (values) {
            this.setState({
                values: this.state.values.concat([[values.x, values.y]])
            });
        }
    }

    render() {
        return (
            <div className="myChart"
                style={{
                    width: "100%",
                    height: "300px"
                }}
            >
                <h2>This is a React Chart</h2>
                <Chart
                    data={[
                        {
                            label: "Series 1",
                            data: this.state.values
                        }
                    ]}
                    axes={[
                        { primary: true, type: "linear", position: "bottom" },
                        { type: "linear", position: "left" }
                    ]}
                />
            </div>
        );
    }
}

class CustomReactGrid extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        const mountPoint = document.createElement('div');
        shadowRoot.appendChild(mountPoint);

        this.reactElement = ReactDOM.render(<CustomGrid></CustomGrid>, mountPoint);
    }

    addValues(v) {
        this.reactElement.addValues(v);
    }
}
customElements.define('custom-react-grid', CustomReactGrid);