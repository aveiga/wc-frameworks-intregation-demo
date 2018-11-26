import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Chart } from "react-charts";


class CustomGrid extends Component {
    constructor(props) {
        super(props);

        this.columns = [
            { key: 'id', name: 'ID' },
            { key: 'title', name: 'Title' },
            { key: 'count', name: 'Count' }];

        this.rows = [{ id: 0, title: 'row1', count: 20 }, { id: 1, title: 'row1', count: 40 }, { id: 2, title: 'row1', count: 60 }];

        setInterval(() => {
            ReactDOM.findDOMNode(this).dispatchEvent(new CustomEvent('reactevent', {
                detail: {
                    name: 'react',
                    data: this.rows
                },
                bubbles: true,
                composed: true
            }));
        }, 1000);
    }

    render() {
        return (
            <div
                style={{
                    width: "400px",
                    height: "300px"
                }}
            >
                <Chart
                    data={[
                        {
                            label: "Series 1",
                            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                        },
                        {
                            label: "Series 2",
                            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
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

        ReactDOM.render(<CustomGrid></CustomGrid>, mountPoint);
    }
}
customElements.define('custom-react-grid', CustomReactGrid);