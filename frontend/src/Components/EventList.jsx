import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./eventlist.scss";
import Landing from "./Landing";
import Boxes from "./box";
import CreateButton from "./buttons/ButtonCreate";

export default class EventList extends Component {
  render() {
    return (
      <div className="EventList">
        <div className="EventList__item">
          <div className="toShow">
            <Landing nameButton="Create event" colors="bluebutton" xlink="/" />
          </div>

          <Link className="buttonEvents">
            <CreateButton name={"Add new Event"} colors="bluebutton" />
          </Link>
        </div>
        <div className="EventList__item">
          <Boxes />

          <p className="Eventform__footer">
            This repository is no Licence, please don’t use this version for any
            puropose, the version is made just to Brainhub Technical Test.
          </p>
        </div>
      </div>
    );
  }
}
