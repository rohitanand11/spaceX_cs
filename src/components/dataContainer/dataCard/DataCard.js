import React from 'react';
import Classes from './DataCard.module.scss';
import ImageContainer from './ImageContainer/ImageContainer';
import Description from './description/Description';

const DataCard = ({data}) => {
    console.log(`here datacard-> ${data}`);
    return (
        <div className={Classes.DataCard}>
            <ImageContainer imageUrl={data.links.mission_patch_small}/>
            <Description />
        </div>
    )
}

export default DataCard;