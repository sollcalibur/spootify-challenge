import * as axios from '../axios';
import * as utilities from './index';

//  NEW RELEASES DISPATCHER, ACTION CREATORS
export const requestNewReleases = () => {
    return dispatch => {
        axios.get('https://api.spotify.com/v1/browse/new-releases')
            .then(response => {
                dispatch(fetchNewReleasesSuccess(response));
            })
            .catch(error => {
                dispatch(fetchNewReleasesFail(error));
            });
    }
}

export const fetchNewReleasesSuccess = (data) => {
    return {
        type: utilities.FETCH_NEW_RELEASES,
        payload: data
    }
}

export const fetchNewReleasesFail = (err) => {
    return {
        type: utilities.FETCH_NEW_RELEASES_ERR,
        error: err
    }
}


//  FEATURED PLAYLISTS DISPATCHER, ACTION CREATORS
export const requestFeaturedPlaylists = () => {
    return dispatch => {
        axios.get('https://api.spotify.com/v1/browse/featured-playlists')
            .then(response => {
                dispatch(fetchFeaturedPlaylistsSuccess(response));
            })
            .catch(error => {
                dispatch(fetchFeaturedPlaylistsFail(error));
            });
    }
}

export const fetchFeaturedPlaylistsSuccess = (data) => {
    return {
        type: utilities.FETCH_FEATURED_PLAYLISTS,
        payload: data
    }
}

export const fetchFeaturedPlaylistsFail = (err) => {
    return {
        type: utilities.FETCH_FEATURED_PLAYLISTS_ERR,
        error: err
    }
}

//  GENRES/CATEGORIES DISPATCHER, ACTION CREATORS
export const requestCategories = () => {
    return dispatch => {
        axios.get('https://api.spotify.com/v1/browse/categories')
            .then(response => {
                dispatch(fetchCategoriesSuccess(response));
            })
            .catch(error => {
                dispatch(fetchCategoriesFail(error.error_description));
            });
    }
}

export const fetchCategoriesSuccess = (data) => {
    return {
        type: utilities.FETCH_CATEGORIES,
        payload: data
    }
}

export const fetchCategoriesFail = (err) => {
    return {
        type: utilities.FETCH_CATEGORIES_ERR,
        error: err
    }
}
