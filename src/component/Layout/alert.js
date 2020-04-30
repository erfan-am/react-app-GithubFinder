import React, { Component } from 'react'

export default class alert extends Component {
    render() {
        const {alert }=this.props;
        return (
            alert !==null && (
                 <div className={`${alert.type}`}></div>
            )
        )
    }
}
