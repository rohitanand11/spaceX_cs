import React from 'react';
import {shallow} from 'enzyme';
import Description from './Description';

describe('Description component with dummy data',()=>{
    it('renders without crashing (both lanching and status true)',()=>{
        shallow(<Description missionIds={[]} launch_year={2006} suc_lauch={true} suc_land={true}/>);
    });

    it('should have an Class Description',()=>{
        const wrapper = shallow(<Description missionIds={[]} launch_year={2006} suc_lauch={true} suc_land={true}/>);
        expect(wrapper.find('.Description')).toHaveLength(1);
    });

    it('should not crash with when landing status is false',()=>{
        shallow(<Description missionIds={[]} launch_year={2006} suc_lauch={true} suc_land={false}/>);
    });

    it('should not crash with when launching status is false',()=>{
        shallow(<Description missionIds={[]} launch_year={2006} suc_lauch={false} suc_land={true}/>);
    });

    it('should not crash with when launching status is false and landing status is false',()=>{
        shallow(<Description missionIds={[]} launch_year={2006} suc_lauch={false} suc_land={false}/>);
    });

});