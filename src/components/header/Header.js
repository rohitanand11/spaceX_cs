import React from 'react';
import Classes from './Header.module.scss';

const Header = ({BrandName}) => {
    return(
        <header className={Classes.Header}>
            <span className={Classes.BrandName}>{BrandName}</span>
        </header>
    );
}

export default Header;