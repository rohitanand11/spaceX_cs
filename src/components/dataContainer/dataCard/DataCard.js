import React from "react";
import Classes from "./DataCard.module.scss";
import ImageContainer from "./ImageContainer/ImageContainer";
import Description from "./description/Description";

const DataCard = ({ data }) => {
    const suc_launch = data.launch_success?'true':'false';
   // const SuccessfulLanding = data.rocket.first_stage.cores[1].land_success !==undefined && data.rocket.first_stage.cores[1].land_success ==='true' ? 'true' : 'false'

  return (
    <div className={Classes.DataCard}>
      <ImageContainer imageUrl={data.links.mission_patch_small} />
      <Description
        missionIds={data.mission_id}
        launch_year = {data.launch_year}
        suc_lauch={suc_launch}
        // SuccessfulLanding={SuccessfulLanding}
      />
    </div>
  );
};

export default DataCard;
