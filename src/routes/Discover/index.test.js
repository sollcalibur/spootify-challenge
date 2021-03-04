import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DiscoverContainer from './index';

configure({ adapter: new Adapter() });

describe('DiscoverContainer component', () => {

    let history;
    let location = {};
    let wrapper;

    beforeEach(() => {
        history = { push: jest.fn() };
        location = {
            hash: '#access_token=BQC5ju0_60ud8IzxyWXQiIP4GXtDMV80x9a5…o67CIr9XZ6jWWLo&token_type=Bearer&expires_in=3600'
        }
        wrapper = shallow(<DiscoverContainer
            history={history} location={location}
        />);
    });

    it('should display the container', () => {
        const pushSpy = jest.spyOn(history, 'push');
        expect(pushSpy).toHaveBeenCalled();
    });
});