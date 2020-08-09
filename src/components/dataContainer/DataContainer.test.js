import React from 'react';
import {shallow} from 'enzyme';
import DataContainer from './DataContainer';

describe('DataContainer component with dummy data',()=>{
    it('renders without crashing',()=>{
        shallow(<DataContainer data={[]}/>);
    });

    it('should have an Class DataContainer',()=>{
        const wrapper = shallow(<DataContainer data={[]}/>);
        expect(wrapper.find('.dataContainer')).toHaveLength(1);
    });
});