import { shallow } from 'enzyme/build';
import React from 'react';
import BottomMenu from './BottomMenu';

const links = [
  { id: 16, name: 'Privacy settings' },
  {
    id: 17,
    name: 'Cookie Policy',
    link: { url: 'https://int.eurosport.co.uk/eurosport/cookie-policy_sto6832423/story.shtml', blank: true },
  },
];

const linksWithoutPrivacy = [
  {
    id: 17,
    name: 'Cookie Policy',
    link: { url: 'https://int.eurosport.co.uk/eurosport/cookie-policy_sto6832423/story.shtml', blank: true },
  },
];

describe('quantcast privacy integration', () => {
  it('should trigger a quantast privacy script', () => {
    const quantCastScript = jest.fn();

    // eslint-disable-next-line no-underscore-dangle
    global.window.__cmp = (...args) => quantCastScript(args);

    const wrapper = shallow(<BottomMenu isMobileMenu={false} links={links} />);

    wrapper.find("[data-test='burger-privacy']").simulate('click', { preventDefault: () => {} });
    expect(quantCastScript).toHaveBeenCalledWith(['displayConsentUi', 2, true]);
  });

  it('does not render quantcast', () => {
    const wrapper = shallow(<BottomMenu isMobileMenu={false} links={linksWithoutPrivacy} />);

    expect(wrapper).toMatchSnapshot();
  });
});
