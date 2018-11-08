import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

expect.extend(createMatchers(emotion));

configure({ adapter: new Adapter() });
