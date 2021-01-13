import React, { Component } from "react";
import "./form.scss";

export default class Form extends Component {
  render() {
    return (
      <form action="/post/store" method="POST" className="Form-events">
        <label htmlFor="contact">Contact:</label>
        <input type="text" name="name" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="email" name="email" placeholder="Email" />
        <label htmlFor="date">Pick up date of Event:</label>
        <input type="date" min="2021/01/07" max="2022-12-31" name="eventDay" />
        <button type="submit" className="Send">
          Create Event
        </button>
      </form>
    );
  }
}
