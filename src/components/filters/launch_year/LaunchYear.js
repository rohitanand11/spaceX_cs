import React from "react";

import Classes from "./LaunchYear.module.scss";

const LaunchYear = ({ launch_years, updateYear, selectedYear }) => {
  
  const displayYearButtons = () => {
    if (launch_years) {
      return launch_years.map((elem) => {
        return elem === selectedYear ? (
          <div
            key={elem}
            className={Classes.Years}
            style={{ backgroundColor: "darkgreen" }}
            onClick={() => updateYear(elem)}
          >
            {elem}
          </div>
        ) : (
          <div
            key={elem}
            className={Classes.Years}
            onClick={() => updateYear(elem)}
          >
            {elem}
          </div>
        );
      });
    }
  };

  return (
    <div className={Classes.LaunchYear}>
      <input placeholder="Launch Year" className={Classes.Launch_year_input} />

      <div className={Classes.Launch_year_buttons}>{displayYearButtons()}</div>
    </div>
  );
};

export default LaunchYear;
