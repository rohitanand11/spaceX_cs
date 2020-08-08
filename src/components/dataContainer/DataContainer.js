import React from 'react';
import Classes from './DataContainer.module.scss';
import DataCard from './dataCard/DataCard';

const DataContainer = ({data}) => {

    const renderDataCards = () => {
        return data.map((data_elem,index)=><DataCard data = {data_elem} key ={index}/>);
    }
    return (
        <div className={Classes.dataContainer}>
            {renderDataCards()}
        </div>
    )
}

export default DataContainer;