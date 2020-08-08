import React from 'react';
import Classes from './Description.module.scss';

const Description = ({missionIds,launch_year,suc_lauch}) => {
    return (
        <div className={Classes.Description}>
            <table>
                <tbody>
                    <tr>
                        <th>Mission Id's : </th>
                        <td>{missionIds}</td>
                    </tr>

                    <tr>
                        <th>Launch Year : </th>
                        {console.log(launch_year)}
                        <td>{launch_year}</td>
                    </tr>

                    <tr>
                        <th>Successful Launch : </th>
                        <td>{suc_lauch}</td>
                    </tr>
                 </tbody>
            </table>
        </div>
    );
};

export default Description;