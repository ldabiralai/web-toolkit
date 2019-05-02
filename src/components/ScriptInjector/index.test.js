import React from 'react';
import { shallow } from 'enzyme';
import ScriptInjector from '.';

let fakeScript;
let headAppendSpy;
let onLoadSpy;

const src = 'www.mocksrc.com/script.js';

describe('when the component mounts', () => {
  beforeEach(() => {
    headAppendSpy = jest.fn();
    onLoadSpy = jest.fn();
    fakeScript = {};
    document.createElement = jest.fn(() => fakeScript);
    document.getElementsByTagName = jest.fn(() => [{ appendChild: headAppendSpy }]);
    shallow(<ScriptInjector src={src} onLoad={onLoadSpy} />);
  });

  it('should create a script element', () => {
    expect(document.createElement).toHaveBeenCalledWith('script');
  });

  it('should call onLoad prop when script has loaded', () => {
    fakeScript.onload();

    expect(onLoadSpy).toHaveBeenCalled();
  });

  it('should set script src', () => {
    expect(fakeScript.src).toBe(src);
  });

  it('should append the script tag onto the head element', () => {
    expect(headAppendSpy).toHaveBeenCalledWith(fakeScript);
  });
});
