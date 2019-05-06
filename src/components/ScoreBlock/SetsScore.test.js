import React from 'react';
import { shallow, mount } from 'enzyme';
import SetsScore, { StyledTeamName, StyledTeamSet } from './SetsScore';
import { pastMatchData, liveMatchDataSet } from './mockData/mockScoreBlockData';

describe('<SetsScore />', () => {
  it('Renders a SetsScore component', () => {
    const wrapper = shallow(<SetsScore data={liveMatchDataSet} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with font size passed as prop', () => {
    const setScoreWrapper = shallow(<SetsScore data={liveMatchDataSet} baseFontSize="16px" />);
    expect(setScoreWrapper).toHaveStyleRule('font-size', '16px');
  });

  it('displays the winning team name with a checkmark', () => {
    const setsScore = mount(<SetsScore data={pastMatchData} />);
    const firstTeam = setsScore.find(StyledTeamName).first();
    expect(firstTeam.text().startsWith('Federer')).toBe(true);
    expect(firstTeam.text()).toContain(' ✓');
  });

  it('displays the second serving team with a dot', () => {
    const setsScore = mount(<SetsScore data={liveMatchDataSet} />);
    const secondTeam = setsScore.find(StyledTeamName).at(1);
    expect(secondTeam.text().startsWith('A. MENENDEZ-MACEIRAS')).toBe(true);
    expect(secondTeam.text()).toContain(' •');
  });

  it('renders the set scores', () => {
    const biggerWrapper = mount(<SetsScore data={liveMatchDataSet} />);
    expect(biggerWrapper.find(StyledTeamSet)).toHaveLength(10);
  });

  it('renders a tie score if any', () => {
    const biggerWrapper = mount(<SetsScore data={liveMatchDataSet} />);
    const thirdSet = biggerWrapper.find(StyledTeamSet).at(2);
    expect(thirdSet.exists('sup')).toEqual(true);
  });
});
