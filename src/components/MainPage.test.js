import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from './MainPage';
import React from 'react';

configure({ adapter: new Adapter() }); // need this line to use enzyme

let wrapper, onRequestKanji
beforeEach(() => {
  const mockProps = {
    onRequestKanji: jest.fn(),
    onUpdateList: jest.fn(),
    wordList: [],
    defaultList: ['dog'],
    isPending: false,
    error: ''
  };
  onRequestKanji=jest.spyOn(mockProps, 'onRequestKanji');
  wrapper = shallow(<MainPage {...mockProps}/>);
});

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('componenentDidMount calls populateInitialList which calls onRequestKanji', () => {
  expect(onRequestKanji).toHaveBeenCalledTimes(1);
});


it('directly checks if componentDidMount called populate initial list', () => {
  const mockProps = {
    onRequestKanji: jest.fn(),
    onUpdateList: jest.fn(),
    wordList: [],
    defaultList: ['dog'],
    isPending: false,
    error: ''
  };

  jest.spyOn(MainPage.prototype, 'populateInitialList')
  jest.spyOn(MainPage.prototype, 'componentDidMount')
  shallow(<MainPage {...mockProps}/>)
  expect(MainPage.prototype.populateInitialList).toHaveBeenCalledTimes(1);
  expect(MainPage.prototype.componentDidMount).toHaveBeenCalledTimes(1);
});

 

