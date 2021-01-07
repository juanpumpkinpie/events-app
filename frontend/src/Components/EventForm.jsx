import React, { Component } from 'react'
import './eventform.scss'
import Image from 'img/image.png'

//Components
import CreateButton from './buttons/ButtonCreate'
import Form from './form/Form'

export default class EventForm extends Component {

 
    render() {
        
        return(
            <div className="Eventform">
                <div className="Eventform__item">
                <h1 className="Eventform__title">Create events</h1>
                <h2 className="Eventform__subtitle">Hello Juan, 🤟</h2>
                <img src={Image} alt="" srcset="" className="Eventform__image"/>
                <div className="Eventform__button">
                <CreateButton name={'Event List'} color={'greenbutton'} />
                </div>
                </div>


                <div className="Eventform__item">
                    <p className="Eventform__caption">Fill your event Juanpumpkinpie</p>
                    <div className="Eventform__form">
                    <Form create={'Create Event'}/>
                    <div className="Eventform__button">
                    <CreateButton name={'Event List'} color={'bluebutton'} />
                    </div>
                    
                    </div>
                   
                    <p className="Eventform__footer">This repository is no Licence, please don’t use this version for any puropose, the version is made just to Brainhub Technical Test.</p>
                </div>
                
            </div>
        )
    }
}