import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBox, {handleSubmit} from './SearchBox';
import React from 'react';

configure({ adapter: new Adapter() }); // need this line to use enzyme

describe('Component render, state updates onChange, and redux action onSubmit', () => {
  it('expect to render SearchBox component', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
  });

  it('updates the state when value is typed into search box', () => {
    const event = {
      preventDefault() {},
      target: {value: 'the-value'}
    }
    const wrapper = shallow(<SearchBox />);

    wrapper.find('#inputKanji').simulate('change', event);
    expect(wrapper.state()).toEqual({input: 'the-value'});
    //expect(onChangeMock).toBeCalledWith('the-value');
  });

  it('updates the state with onChange and then onSubmit passes state.input to redux action', () => {
    const updateReduxStoreAction = jest.fn();
    const event = {
      preventDefault() {},
      target: {value: 'the-value'}
    }
    const wrapper = shallow(<SearchBox submitWord={updateReduxStoreAction}/>);

    // simulates the onchange event with a synthetic event
    wrapper.find('#inputKanji').simulate('change', event);
    // simulates onSubmit of form after state has been updated with onChange.
    wrapper.find('#SearchBox').simulate('submit', event);
    // checks of onSubmit passes the correct parameters from state.input to submitWord function
    // The updateReduxStoreAction function is the redux action passed in the props to this component
    expect(updateReduxStoreAction).toBeCalledWith('the-value');
  });
});

