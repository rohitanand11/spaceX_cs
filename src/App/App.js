import React, { useState } from "react";

import Header from "../components/header/Header";
import Filters from "../components/filters/Filters";
import classes from "./App.module.scss";

const BRAND_NAME = "SpacEx Launch Programs";
const LAUNCH_YEARS = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
];
const LAUNCH_STATUS = ['true', 'false'];

function App() {
  const [year, setYear] = useState(2006);
  const [successfulLaunch, setSuccessfulLaunch] = useState(null);
  const [successfulLand, setSuccessfulLand] = useState(null);

  const updateYear = (pYear) => {
    setYear(pYear);
  };

  const updateStatusLaunch = (pStatus) => {
    setSuccessfulLaunch(pStatus);
  };

  const updateStatusLand = (pStatus) => {
    setSuccessfulLand(pStatus);
  };

  return (
    <div className={classes.App}>
      <Header BrandName={BRAND_NAME} />

      <main>
        <Filters
          launch_years={LAUNCH_YEARS}
          updateYear={updateYear}
          selectedYear={year}
          success_launch={LAUNCH_STATUS}
          updateStatusLaunch={updateStatusLaunch}
          selectedStatusLaunch={successfulLaunch}
          success_land = {LAUNCH_STATUS}
          updateStatusLand = {updateStatusLand}
          selectedStatusLand={successfulLand}
        />
      </main>
    </div>
  );
}

export default App;
