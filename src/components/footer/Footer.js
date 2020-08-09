import React from 'react';
import Classes from './Footer.module.scss';

const Footer = ({DeveloperName}) => {
    return(
        <footer className={Classes.Footer}>
            <span className={Classes.DeveloperName}><strong>Developer By : </strong> {DeveloperName}</span>
        </footer>
    );
}

export default Footer;