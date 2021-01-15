import React, { Component } from "react";
import "./form.scss";

//const nameRegExp = RegExp(/^[a-z]{3}$/);

export default class Form extends Component {
  state = {
    name: "",
    lastName: "",
    errors: {
      name: "",
      lastName: "",
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    let errors = { ...this.state.errores };
    switch (name) {
      case "name":
        errors.name =
          value.length < 2 && value.length > 0
            ? "You need more than 2 digits"
            : "";
        break;

      case "lastName":
        errors.lastName =
          value.length < 2 && value.length > 0
            ? "You need more than 2 digits"
            : "";
        break;
    }

    this.setState({ errors, [name]: value });
  };

  render() {
    const { errors } = this.state;

    return (
      <form
        className="Form-events"
        method="POST"
        action="/post/store"
        title="CreateEvent"
      >
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
        />

        <label htmlFor="date">Pick up date of Event:</label>
        <input
          type="date"
          min="2021/01/07"
          max="2022-12-31"
          name="eventDay"
          onChange={this.handleChange}
        />

        <button type="submit" className="Send">
          Create Event
        </button>
      </form>
    );
  }
}
