import React, { Component } from "react";
import "./eventform.scss";

//Components
import Form from "./form/Form";
import Landing from "./Landing";

export default class EventForm extends Component {
  render() {
    return (
      <div className="Eventform">
        <div className="Eventform__item">
          <Landing
            nameButton="Event List"
            colors="greenbutton"
            xlink="/events"
          />
        </div>

        <div className="Eventform__item">
          <p className="Eventform__caption">Fill your event Juanpumpkinpie</p>
          <div className="Eventform__form">
            <Form create={"Create Event"} />
            <div className="Eventform__button"></div>
          </div>

          <p className="Eventform__footer">
            This repository is no Licence, please don’t use this version for any
            puropose, the version is made just to Brainhub Technical Test.
          </p>
        </div>
      </div>
    );
  }
}
