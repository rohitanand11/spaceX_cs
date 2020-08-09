import React from 'react';
import {shallow} from 'enzyme';
import Filters from './Filters';

describe('Filter component with dummy data',()=>{
    it('renders without crashing',()=>{
        shallow(<Filters data={[]}/>);
    });

    it('should have an Class Filter',()=>{
        const wrapper = shallow(<Filters data={[]}/>);
        expect(wrapper.find('.Filter')).toHaveLength(1);
    });
});