import React from "react";

import LaunchYear from "./launch_year/LaunchYear";
import SuccessfulLaunch from "./successful_launch/SuccessfulLaunch";
import Classes from "./Filters.module.scss";

const Filter = ({ launch_years, updateYear ,selectedYear}) => {
  return (
    <div className={Classes.Filter}>
      
        {/* 1)for launch year */}
        <LaunchYear launch_years={launch_years} updateYear={updateYear} selectedYear={selectedYear}/>
      

      {/* 2)for successful launch */}
      <SuccessfulLaunch />

      {/* 3)for successful landing */}
      {/* <SuccessfulLanding />  */}
    </div>
  );
};

export default Filter;
