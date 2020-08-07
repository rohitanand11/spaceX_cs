import React from 'react';
import Classes from './SuccessfulLaunch.module.scss';

const SuccessfulLaunch = () => {
    return(
        <div className={Classes.SuccessfulLaunch}>
            <div className={Classes.SuccessfulLaunch_enable}>true</div>
            <div className={Classes.SuccessfulLaunch_disable}>false</div>
        </div>
    )
};

export default SuccessfulLaunch;