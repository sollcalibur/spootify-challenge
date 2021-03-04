import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DiscoverBlock from './DiscoverBlock';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

configure({ adapter: new Adapter() });

describe('DiscoverBlock component', () => {

    let text = '';
    let id = '';
    let data = [];
    let wrapper;

    beforeEach(() => {
        text = "RELEASED THIS WEEK";
        id = "released";
        data = [
            {
                "name": "Pharrell Williams",
                images: [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/e6b635ebe3ef4ba22492f5698a7b5d417f78b88a",
                        "width": 640
                    }
                ],
            },
        ];

        wrapper = shallow(<DiscoverBlock
            text={text} id={id} data={data}
        />);
    });

    it('should display FontAwesomeIcon if items is not empty', () => {
        expect(wrapper.find(FontAwesomeIcon).length === 2).toBe(true)
    });
});