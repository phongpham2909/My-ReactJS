import React, { Component } from 'react';
// connect react-redux
import { connect } from 'react-redux';
import { actGetCategoryRequest, actAddCategoryRequest, actUpdateCategoryRequest } from '../../actions/index';
import SectionAddFormCategory from '../../../views/Dashboard/Category/Sections/SectionAdd';

class CategoryAddFormContainer extends Component {
    render() {
        const { categoryEditing, actEditCategory, match, history, actAddCategory, actUpdateCategory } = this.props;
        return (
            <SectionAddFormCategory
                categoryEditing={categoryEditing}
                actEditCategory={actEditCategory}
                actAddCategory={actAddCategory}
                actUpdateCategory={actUpdateCategory}
                match={match}
                history={history}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categoryEditing: state.CategoryEditing
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actEditCategory: (id) => {
            dispatch(actGetCategoryRequest(id));
        },
        actAddCategory: (category) => {
            dispatch(actAddCategoryRequest(category));
        },
        actUpdateCategory: (category) => {
            dispatch(actUpdateCategoryRequest(category));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAddFormContainer);