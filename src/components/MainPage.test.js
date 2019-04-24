import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from '../containers/App';
import React from 'react';

configure({ adapter: new Adapter() }); // need this line to use enzyme
const mockStore = {
  wordList: [],
  defaultList: [],
};

it('expect to render SearchBox component', () => {
  expect(shallow(<App store={mockStore}/>)).toMatchSnapshot();
});


 

