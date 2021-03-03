import { updateObject } from '../utils';
import * as actionTypes from './index';

const initialState = {
    newReleases: {},
    featuredPlaylists: {},
    categories: {},
}

const setNewReleases = (state, action) => {
    return updateObject(state, {
        newReleases: action.payload
    });
}

const setFeaturedPlaylists = (state, action) => {
    return updateObject(state, {
        featuredPlaylists: action.payload
    });
}

const setCategories = (state, action) => {
    return updateObject(state, {
        categories: action.payload
    });
}

const discoverReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEW_RELEASES:
            return setNewReleases(state, action);

        case actionTypes.FETCH_NEW_RELEASES_ERR:
            return state;

        case actionTypes.FETCH_FEATURED_PLAYLISTS:
            return setFeaturedPlaylists(state, action);

        case actionTypes.FETCH_FEATURED_PLAYLISTS_ERR:
            return state;

        case actionTypes.FETCH_CATEGORIES:
            return setCategories(state, action);

        case actionTypes.FETCH_CATEGORIES_ERR:
            return state;

        default:
            return state;
    }
}

export default discoverReducer;