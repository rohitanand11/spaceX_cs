import React from "react";
import Classes from "./DataCard.module.scss";
import ImageContainer from "./ImageContainer/ImageContainer";
import Description from "./description/Description";

const DataCard = ({ data }) => {
    const suc_launch = data.launch_success?'true':'false';
   // const SuccessfulLanding = data.rocket.first_stage.cores[1].land_success !==undefined && data.rocket.first_stage.cores[1].land_success ==='true' ? 'true' : 'false'

   const landingPath = () => {
     if (data && data.rocket && data.rocket.first_stage && data.rocket.first_stage.cores[0]&& data.rocket.first_stage.cores[0].land_success){
       return (data.rocket.first_stage.cores[0].land_success).toString();
     } else {
       return "NA"
     }
   }

  return (
    <div className={Classes.DataCard}>
      <ImageContainer imageUrl={data.links.mission_patch_small} />
      <Description
        missionIds={data.mission_id}
        launch_year = {data.launch_year}
        suc_lauch={suc_launch}
        Suc_land={landingPath()}
      />
    </div>
  );
};

export default DataCard;
