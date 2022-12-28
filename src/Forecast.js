import React from "react";
import "./App";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col-sm-2">
          <span className="day">MON</span>
          <br />
          🌤️
          <br />
          <span className="temp">23°</span>
        </div>
        <div className="col-sm-2">
          <span className="day">TUE</span>
          <br />
          🌤️
          <br />
          <span className="temp">23°</span>
        </div>
        <div className="col-sm-2">
          <span className="day">WED</span>
          <br />
          🌤️
          <br />
          <span className="temp">23°</span>
        </div>
        <div className="col-sm-2">
          <span className="day">THU</span>
          <br />
          🌤️
          <br />
          <span className="temp">23°</span>
        </div>
        <div className="col-sm-2">
          <span className="day">FRI</span>
          <br />
          🌤️
          <br />
          <span className="temp">23°</span>
        </div>
        <div className="col-sm-2">
          <span className="day">SAT</span>
          <br />
          🌤️
          <br />
          <span className="temp">23°</span>
        </div>
      </div>
    </div>
  );
}
