import React from "react";
import ButtonsTray from "../buttonsTray/ButtonsTray";
import Classes from "./Filters.module.scss";

const Filters = ({
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
      <ButtonsTray
        filterName = "Launch Year"
        buttonsValues={launch_years}
        updateFocused={updateYear}
        selectedBUtton={selectedYear}
      />

      {/* 2)for successful launch */}
      <ButtonsTray
        filterName = "Successful Launch"
        buttonsValues={success_launch}
        updateFocused={updateStatusLaunch}
        selectedBUtton={selectedStatusLaunch}
      />

      {/* 3)for successful landing */}
      <ButtonsTray
        filterName = "Successful Landing"
        buttonsValues={success_land}
        updateFocused={updateStatusLand}
        selectedBUtton={selectedStatusLand}
      />
      
    </div>
  );
};

export default Filters;
