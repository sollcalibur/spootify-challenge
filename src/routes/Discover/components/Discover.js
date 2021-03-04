import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { requestNewReleases, requestFeaturedPlaylists, requestCategories } from "../../../store/DiscoverActions";
import CoreLayout from '../../../common/layouts/CoreLayout';

import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

class Discover extends Component {
  componentDidMount() {
    this.props.requestNewReleases();
    this.props.requestFeaturedPlaylists();
    this.props.requestCategories();
  }

  render() {
    const { newReleases, featuredPlaylists, categories } = this.props;
    const isLoaded = !_.isEmpty(newReleases) && !_.isEmpty(featuredPlaylists) && !_.isEmpty(categories)
    const content = isLoaded ? (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases.albums.items} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={featuredPlaylists.playlists.items} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories.categories.items} imagesKey="icons" />
      </div>
    ) : null;

    return (
      <CoreLayout>
        {content}
      </CoreLayout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestNewReleases: () => dispatch(requestNewReleases()),
    requestFeaturedPlaylists: () => dispatch(requestFeaturedPlaylists()),
    requestCategories: () => dispatch(requestCategories()),
  };
}

function mapStateToProps(state) {
  return {
    newReleases: state.discover.newReleases,
    featuredPlaylists: state.discover.featuredPlaylists,
    categories: state.discover.categories
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Discover);