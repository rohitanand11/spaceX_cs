import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('Header component',()=>{
    it('renders without crashing',()=>{
        shallow(<Header/>);
    });

    it('should have an Class Header',()=>{
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.Header')).toHaveLength(1);
    });
});