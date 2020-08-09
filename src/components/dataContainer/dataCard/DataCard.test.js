import React from 'react';
import {shallow} from 'enzyme';
import DataCard from './DataCard';

describe('DataCard component with dummy data',()=>{
    it('renders without crashing',()=>{
        shallow(<DataCard data={{links:""}}/>);
    });

    it('should have an Class DataCard',()=>{
        const wrapper = shallow(<DataCard data={{links:""}}/>);
        expect(wrapper.find('.DataCard')).toHaveLength(1);
    });
});