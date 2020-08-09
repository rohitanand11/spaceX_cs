import React from 'react';
import Classes from './Description.module.scss';

const Description = ({missionIds,launch_year,suc_lauch,Suc_land}) => {
    return (
        <div className={Classes.Description}>
            <table>
                <tbody>
                    <tr>
                        <th>Mission Id's : </th>
                        <td>{missionIds.length!==0?missionIds:"No Ids"}</td>
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

                    <tr>
                        <th>Successful Land : </th>
                        <td>{Suc_land}</td>
                    </tr>
                 </tbody>
            </table>
        </div>
    );
};

export default Description;