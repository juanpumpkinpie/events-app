import React, { Component } from "react";
import Landing from "./Landing";
import "./eventlist.scss";
import { Link } from "react-router-dom";
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
          <div className="EventList-box">
            <h2 className="EventList-box__time">14/02/2021</h2>
            <ul className="EventList-box__information">
              <li>Juan</li>
              <li>Pumpkinpie</li>
              <li>email@email.com</li>
            </ul>
          </div>

          <div className="EventList-box">
            <h2 className="EventList-box__time">14/02/2021</h2>
            <ul className="EventList-box__information">
              <li>Juan</li>
              <li>Pumpkinpie</li>
              <li>email@email.com</li>
            </ul>
          </div>
          <div className="EventList-box">
            <h2 className="EventList-box__time">14/02/2021</h2>
            <ul className="EventList-box__information">
              <li>Juan</li>
              <li>Pumpkinpie</li>
              <li>email@email.com</li>
            </ul>
          </div>
          <div className="EventList-box">
            <h2 className="EventList-box__time">14/02/2021</h2>
            <ul className="EventList-box__information">
              <li>Juan</li>
              <li>Pumpkinpie</li>
              <li>email@email.com</li>
            </ul>
          </div>
          <div className="EventList-box">
            <h2 className="EventList-box__time">14/02/2021</h2>
            <ul className="EventList-box__information">
              <li>Juan</li>
              <li>Pumpkinpie</li>
              <li>email@email.com</li>
            </ul>
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
