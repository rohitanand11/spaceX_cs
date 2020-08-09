import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

describe('Footer component',()=>{
    it('renders without crashing',()=>{
        shallow(<Footer/>);
    });

    it('should have an Class Footer',()=>{
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.Footer')).toHaveLength(1);
    });
});