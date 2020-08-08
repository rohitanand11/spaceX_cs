import React from "react";

// import LaunchYear from "./launch_year/LaunchYear";
// import SuccessfulLaunch from "./successful_launch/SuccessfulLaunch";
import ButtonsTray from "../buttonsTray/ButtonsTray";
import Classes from "./Filters.module.scss";

const Filter = ({
  launch_years,
  updateYear,
  selectedYear,
  success_launch,
  updateStatusLaunch,
  selectedStatusLaunch,
  success_land,
  updateStatusLand,
  selectedStatusLand,
}) => {
  return (
    <div className={Classes.Filter}>
      {/* 1)for launch year */}
      {/* <LaunchYear launch_years={launch_years} updateYear={updateYear} selectedYear={selectedYear}/> */}
      <ButtonsTray
        filterName = "Launch Year"
        buttonsValues={launch_years}
        updateFocused={updateYear}
        selectedBUtton={selectedYear}
      />

      {/* 2)for successful launch */}
      {/* <ButtonsTray buttonsValues={launch_years} updateFocused={updateYear} selectedBUtton={selectedYear}/> */}
      <ButtonsTray
        filterName = "Successful Launch"
        buttonsValues={success_launch}
        updateFocused={updateStatusLaunch}
        selectedBUtton={selectedStatusLaunch}
      />
      <ButtonsTray
        filterName = "Successful Landing"
        buttonsValues={success_land}
        updateFocused={updateStatusLand}
        selectedBUtton={selectedStatusLand}
      />

      {/* 3)for successful landing */}
      {/* <SuccessfulLanding />  */}
    </div>
  );
};

export default Filter;
