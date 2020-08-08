import React from "react";
import Classes from "./ImageContainer.module.scss";

const ImageContainer = ({ imageUrl }) => {

  const getImageImageUrl = () => {
    const modifiedImageUrl = `https://images.weserv.nl/?url=${imageUrl}`;
    return modifiedImageUrl;
  };

  return (
    <div className={Classes.ImageContainer}>
      <img src={getImageImageUrl()} alt="spacex" className={Classes.Image}/>
    </div>
  );

};

export default ImageContainer;
