import React, { Component } from 'react';
// connect react-redux
import { connect } from 'react-redux';
import { actGetSizeCategoryRequest, actAddSizeCategoryRequest, actUpdateSizeCategoryRequest } from '../../actions/actionsCategory';
import SectionAddForm from '../../../views/Dashboard/SizeCategory/Sections/SectionAdd';

class SizeCategoryAddFormContainer extends Component {
    render() {
        const { sizeEditing, actEditSizeCategory, match, history, actAddSizeCategory, actUpdateSizeCategory } = this.props;
        return (
            <SectionAddForm
                sizeEditing={sizeEditing}
                actEditSizeCategory={actEditSizeCategory}
                actAddSizeCategory={actAddSizeCategory}
                actUpdateSizeCategory={actUpdateSizeCategory}
                match={match}
                history={history}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sizeEditing: state.sizeEditing
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actEditSizeCategory: (id) => {
            dispatch(actGetSizeCategoryRequest(id));
        },
        actAddSizeCategory: (size) => {
            dispatch(actAddSizeCategoryRequest(size));
        },
        actUpdateSizeCategory: (size) => {
            dispatch(actUpdateSizeCategoryRequest(size));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SizeCategoryAddFormContainer);