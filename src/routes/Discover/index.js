import React from 'react';

import _ from 'lodash';
import { getParamValues } from '../../utils';

import CoreLayout from '../../common/layouts/CoreLayout';
import Discover from './components/Discover';

export default class DiscoverContainer extends React.Component {
    componentDidMount() {
        const { history, location } = this.props;
        try {
            if (_.isEmpty(location.hash)) {
                return history.push('/discover');
            }
            
            const access_token = getParamValues(location.hash);
            const expiryTime = 0;

            localStorage.removeItem("params");
            localStorage.removeItem("expiry_time");

            localStorage.setItem("params", JSON.stringify(access_token));
            localStorage.setItem("expiry_time", expiryTime);

            history.push('/discover');
        } catch (error) {
            history.push('/');
        }
    }

    render() {
        return (
            <CoreLayout>
                <Discover></Discover>
            </CoreLayout>
        );
    }
}
