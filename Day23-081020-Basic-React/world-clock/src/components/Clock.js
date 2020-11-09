import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    location = {
        Bangkok: 0 ,
        Japan: 2 ,
        London: -6 
    }

    render() {
        const date = this.state.date;
        return (
            <div className={this.props.cn} style={{ width: "90%", margin: "0.85em" }}>
                <div style={{ fontSize: "2.8em" }}>{this.props.location}</div>
                <div style={{ fontSize: "3em" }}>
                    {date.getHours() + this.location[this.props.location]}:
                    {(date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()}:
                    {(date.getSeconds() < 10) ? `0${date.getSeconds()}` : date.getSeconds()}
                </div>

            </div>
        );
    }
}

export default Clock;