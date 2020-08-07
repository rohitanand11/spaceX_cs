import React from 'react';

import Header from "../components/header/Header";
import classes from './App.module.scss';

const BRAND_NAME = "SpacEx Launch Programs"

function App() {
  return (
    <div className={classes.App}>
      <Header BrandName={BRAND_NAME}/>
    </div>  
  );
}

export default App;
