import React, { Component } from 'react';
import EventForm from "Components/EventForm";
import EventList from 'Components/EventList';

export default class App extends Component {
    state = {
        ruta: 'form'
    }

    render(){
        const {ruta} = this.state
        return(
            <div>
            { ruta === 'form' && <EventForm />}
            { ruta === 'list' && <EventList />}
            </div>
        )
    }
}