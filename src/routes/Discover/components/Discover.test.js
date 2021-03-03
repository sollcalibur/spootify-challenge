import React from 'react';
import { Provider } from 'react-redux';

import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Discover from './Discover';

const mockStore = configureStore([thunk]);

describe('Discover component', () => {
    let store;
    let component;


    beforeEach(() => {
        store = mockStore({
            discover: {
                newReleases: {},
                featuredPlaylists: {},
                categories: {},
            }
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <Discover />
            </Provider>
        );
    });

    it('should render with given initial state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should dispatch 3 actions upon mounting the component', () => {
        expect(store.dispatch).toHaveBeenCalledTimes(3);
    });

    it('should render contents when all states are not empty', () => {
        let nonEmptyStore;
        let nonEmptyComponent;

        nonEmptyStore = mockStore({
            discover: {
                newReleases: {
                    albums: {
                        items: [
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
                        ]
                    }
                },
                featuredPlaylists: {
                    playlists: {
                        items: [
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
                        ]
                    }
                },
                categories: {
                    categories: {
                        items: [
                            {
                                "name": "Pharrell Williams",
                                icons: [
                                    {
                                        "height": 640,
                                        "url": "https://i.scdn.co/image/e6b635ebe3ef4ba22492f5698a7b5d417f78b88a",
                                        "width": 640
                                    }
                                ],
                            },
                        ]
                    }
                },
            }
        });

        nonEmptyComponent = renderer.create(
            <Provider store={nonEmptyStore}>
                <Discover />
            </Provider>
        );

        const testInstance = nonEmptyComponent.root;
        const element = testInstance.findByType("div");
        expect(element.props.className.includes("discover")).toBe(true);
    });
});