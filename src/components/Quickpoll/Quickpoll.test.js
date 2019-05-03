import React from 'react';
import { shallow } from 'enzyme';
import Quickpoll, { StyledChoices, StyledChoiceText } from '.';
import { choices } from './index.stories';

describe('QuickPoll', () => {
  it('renders a QuickPoll Component', () => {
    expect(
      shallow(
        <Quickpoll
          title="Who will win the 2019 French Open?"
          choices={choices}
          showResults={false}
          onChoiceClick={() => null}
        />
      )
    ).toMatchSnapshot();
  });

  it('should display choices', () => {
    const wrapper = shallow(<Quickpoll title="Who will win the 2019 French Open?" choices={choices} />);
    expect(wrapper.find(StyledChoices).children()).toHaveLength(5);
    expect(
      wrapper
        .find(StyledChoiceText)
        .first()
        .debug()
    ).toEqual('Nadal');
  });
});
