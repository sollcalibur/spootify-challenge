import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DiscoverItem from './DiscoverItem';

configure({ adapter: new Adapter() });

describe('DiscoverItem component', () => {
    let name = "";
    let images = [];
    let wrapper;

    beforeEach(() => {
        name = "Pharrell Williams";
        images = [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/e6b635ebe3ef4ba22492f5698a7b5d417f78b88a",
                "width": 640
            }
        ];

        wrapper = shallow(<DiscoverItem
            images={images} name={name}
        />);
    });

    it('should display Discover Item box', () => {
        expect(wrapper.find('.discover-item').length === 1).toBe(true);
    });
});