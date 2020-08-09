import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "../components/header/Header";
import Filters from "../components/filters/Filters";
import DataContainer from "../components/dataContainer/DataContainer";

import classes from "./App.module.scss";
import Footer from "../components/footer/Footer";

const BRAND_NAME = "SpaceX Launch Programs";
const DEVELOPER_NAME = "ROHIT ANAND";
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

const LAUNCH_STATUS = ["true", "false"];
const BASE_API_URL = "https://api.spaceXdata.com/v3/launches?limit=100";

const App = () => {
  const [year, setYear] = useState(null);
  const [successfulLaunch, setSuccessfulLaunch] = useState(null);
  const [successfulLand, setSuccessfulLand] = useState(null);
  const [dataFromApi, setdataFromApi] = useState(null);

  let history = useHistory();

  const updateYear = (pYear) => {
    pYear === year ? setYear(null) : setYear(pYear);
  };

  const updateStatusLaunch = (pStatus) => {
    pStatus === successfulLaunch
      ? setSuccessfulLaunch(null)
      : setSuccessfulLaunch(pStatus);
  };

  const updateStatusLand = (pStatus) => {
    pStatus === successfulLand
      ? setSuccessfulLand(null)
      : setSuccessfulLand(pStatus);
  };

  const getDataFromApi = (pUrl) => {
    fetch(pUrl)
      .then((response) => response.json())
      .then((data) => setdataFromApi(data));
  };

  useEffect(() => {
    getDataFromApi(BASE_API_URL);
    history.push("/home");
  }, []);

  useEffect(() => {
    const apiBaseUrl = BASE_API_URL;
    let filteredUrl = "";
    let finalUrl = "";

    if (successfulLaunch === null && successfulLand === null && year === null) {
      getDataFromApi(BASE_API_URL);
      history.push("/home");

    } else {
      if (successfulLaunch !== null) {
        filteredUrl = `&launch_success=${successfulLaunch}`;
      }

      if (successfulLand !== null) {
        filteredUrl = `${filteredUrl}&land_success=${successfulLand}`;
      }

      if (year) {
        filteredUrl = `${filteredUrl}&launch_year=${year}`;
      }

      finalUrl = `${apiBaseUrl}${filteredUrl}`;

      getDataFromApi(finalUrl);
      history.push(`/${filteredUrl}`);
    }
  }, [year, successfulLaunch, successfulLand]);

  const renderMainComponent = () => {
    if (dataFromApi) {
      return <DataContainer data={dataFromApi} />;
    } else {
      return null;
    }
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
          success_land={LAUNCH_STATUS}
          updateStatusLand={updateStatusLand}
          selectedStatusLand={successfulLand}
        />

        {renderMainComponent()}
      </main>

      <Footer DeveloperName={DEVELOPER_NAME}/>
    </div>
  );
};

export default App;
