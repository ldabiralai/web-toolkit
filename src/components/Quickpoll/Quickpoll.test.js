import React from 'react';
import { shallow } from 'enzyme';
import Quickpoll, { StyledChoices, StyledChoiceText, StyledTitle, StyledResultPercentage } from '.';
import { choices, choicesWithResults } from './index.stories';

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

  it('should display the title', () => {
    const wrapper = shallow(
      <Quickpoll title="Who will win the 2019 French Open?" choices={choices} onChoiceClick={() => null} />
    );
    expect(
      wrapper
        .find(StyledTitle)
        .childAt(0)
        .text()
    ).toEqual('Who will win the 2019 French Open?');
  });

  it('should display choices', () => {
    const wrapper = shallow(
      <Quickpoll title="Who will win the 2019 French Open?" choices={choices} onChoiceClick={() => null} />
    );
    expect(wrapper.find(StyledChoices).children()).toHaveLength(5);
    expect(
      wrapper
        .find(StyledChoiceText)
        .first()
        .childAt(0)
        .text()
    ).toEqual('Nadal');
  });

  it('should trigger the callback passed as prop on click', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(
      <Quickpoll onChoiceClick={handleClick} title="Who will win the 2019 French Open?" choices={choices} />
    );
    const myChoice = wrapper.findWhere(node => node.key() === '123455');
    myChoice.simulate('click');
    expect(handleClick).toHaveBeenCalledWith(123455);
  });

  it('should display results when showResults is set to true', () => {
    const wrapper = shallow(
      <Quickpoll
        showResults
        title="Who will win the 2019 French Open?"
        choices={choicesWithResults}
        onChoiceClick={() => null}
      />
    );
    expect(
      wrapper
        .find(StyledChoiceText)
        .first()
        .childAt(0)
        .text()
    ).toEqual('Nadal');

    expect(
      wrapper
        .find(StyledResultPercentage)
        .first()
        .childAt(0)
        .text()
    ).toEqual('50%');
  });
});
