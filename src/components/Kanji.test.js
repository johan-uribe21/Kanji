import {shallow, mount, render, Enzyme, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Kanji from './Kanji';
import React from 'react';

configure({ adapter: new Adapter() }); // need this line to use enzyme

describe('Card render', () => {
  it('expect to render Card component', () => {
    const mockProps = {word: 'dog', kanji: 'kanji'};
    
    expect(shallow(<Kanji props={mockProps}/>)).toMatchSnapshot();
  });
})

