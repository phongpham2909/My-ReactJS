import React, { Component } from 'react';
import Profile from '../../../views/Dashboard/Profile/Profile';

// connect react-redux
import { connect } from 'react-redux';
import { actAdministrationById, actUpdateInfoAdministration } from '../../actions/actionsAdministration';

class ProfileContainer extends Component {
    render() {
        const { match, history, adminInfo, actAdministrationById, actUpdateInfoAdministration } = this.props;
        return (
            <Profile
                match={match}
                history={history}
                adminInfo={adminInfo}
                actAdministrationById={actAdministrationById}
                actUpdateInfoAdministration={actUpdateInfoAdministration}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        adminInfo: state.adminProfile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actAdministrationById: (id) => {
            dispatch(actAdministrationById(id));
        },
        actUpdateInfoAdministration: (info) => {
            dispatch(actUpdateInfoAdministration(info));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);