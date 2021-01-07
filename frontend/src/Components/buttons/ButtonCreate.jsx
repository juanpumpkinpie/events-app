import React,{ Component } from 'react'
import './buttonStyle.scss'

export default class ButtonCreate extends Component {
    render(){
        return(
            <div className={this.props.color}>{this.props.name}</div>
        )
    }
}