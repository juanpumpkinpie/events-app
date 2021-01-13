import React, { Component } from "react";
import "./landing.scss";
import { Link } from "react-router-dom";
import Image from "img/image.png";
import CreateButton from "./buttons/ButtonCreate";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1 className="landing__title">Create events</h1>
        <h2 className="landing__subtitle">Hello Juan, 🤟</h2>
        <img src={Image} alt="" srcset="" className="landing__image" />
        <div className="landing__button">
          <Link to={this.props.xlink}>
            <CreateButton
              name={this.props.nameButton}
              colors={this.props.colors}
            />
          </Link>
        </div>
      </div>
    );
  }
}
