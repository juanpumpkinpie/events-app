import React, { useEffect, useState } from "react";
import "./eventlist.scss";

function Boxes() {
  const [eve, setEvent] = useState([
    {
      name: "",
    },
  ]);

  useEffect(() => {
    fetch("/events")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((x) => setEvent(x));
  });

  return (
    <div>
      {eve.map((data) => (
        <div className="EventList-box">
          <h2 className="EventList-box__time">{data.eventDay} </h2>
          <ul className="EventList-box__information">
            <li>{data.name}</li>
            <li>{data.lastName}</li>
            <li>{data.email}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Boxes;
