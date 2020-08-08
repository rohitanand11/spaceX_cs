import React from "react";
import Classes from "./ButtonsTray.module.scss";

const ButtonsTray = ({ filterName,buttonsValues, updateFocused, selectedBUtton }) => {
  const displayButtons = () => {
    if (buttonsValues) {
      return buttonsValues.map((elem) => {
        return elem === selectedBUtton ? (
          <button
            key={elem}
            className={Classes.Button}
            style={{ backgroundColor: "darkgreen" }}
            onClick={() => updateFocused(elem)}
          >
            {elem}
          </button>
        ) : (
          <button
            key={elem}
            className={Classes.Button}
            onClick={() => updateFocused(elem)}
          >
            {elem}
          </button>
        );
      });
    }
  };
  return (
    <div className={Classes.ButtonsTray}>
        <div className={Classes.filterName}>{filterName}</div>
      <div className={Classes.Buttons}>{displayButtons()}</div>
    </div>
  );
};

export default ButtonsTray;
