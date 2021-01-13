import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import EventForm from "Components/EventForm";
import EventList from 'Components/EventList';

export default class App extends Component {
    

    render(){
        
        return(
            <div>
                <Route exact path="/" component={EventForm} />
                <Route path="/events" component={EventList} />
            </div>
        )
    }
}