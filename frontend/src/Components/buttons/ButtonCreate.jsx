import React,{ Component } from 'react'
import './buttonStyle.scss'

export default class ButtonCreate extends Component {

    handleClick = () =>{
        console.log('Hola')
    }
  
    render(){
        return(
            <div className={this.props.color}  onClick={this.handleClick.bind(this)}>{this.props.name}</div>
        )
    }
}