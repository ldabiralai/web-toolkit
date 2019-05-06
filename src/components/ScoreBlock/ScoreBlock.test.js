import React from 'react';
import { shallow, mount } from 'enzyme';
import ScoreBlock, { StyledButton } from './ScoreBlock';
import { liveMatchData, pastMatchData } from './mockData/mockScoreBlockData';
import greenCircleSVG from '../../assets/green-circle.svg';
import crossSVG from '../../assets/circle-with-cross.svg';

describe('<ScoreBlock />', () => {
  it('Renders a ScoreBlock component with expected snapshot', () => {
    const wrapper = shallow(<ScoreBlock data={pastMatchData} matchUrl="www.eurosport.fr" isWatchable isLive />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should display '->' if isLive", () => {
    const wrapper = mount(<ScoreBlock isLive data={liveMatchData} matchUrl="www.google.fr" isWatchable={false} />);
    const styledButton = wrapper.find(StyledButton);
    expect(styledButton).toHaveStyleRule('content', "'\u2192'");
  });

  it('should display a green circle if displayLeftCircle is set to won', () => {
    const wrapper = mount(
      <ScoreBlock isLive data={liveMatchData} matchUrl="www.google.fr" isWatchable={false} displayLeftCircle="won" />
    );
    const greenCircle = wrapper.find('img');
    expect(greenCircle.prop('src')).toEqual(greenCircleSVG);
  });

  it('should display a grey circle with cross if displayLeftCircle is set to lost', () => {
    const wrapper = mount(
      <ScoreBlock isLive data={liveMatchData} matchUrl="www.google.fr" isWatchable={false} displayLeftCircle="lost" />
    );
    const circle = wrapper.find('img');
    expect(circle.prop('src')).toEqual(crossSVG);
  });
});
