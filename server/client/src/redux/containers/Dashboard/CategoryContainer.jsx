import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// connect react-redux
import { connect } from 'react-redux';
import { actDeleteCategoryRequest } from '../../actions/index';
// Core Components
import CategoryManagement from '../../../views/Dashboard/Category/CategoryManagement';
import SectionItem from '../../../views/Dashboard/Category/Sections/SectionItem';
// styles 
import Styles from '../../../assets/jss/material-dashboard-pro-react/views/Category/CategoryStyle';

class CategoryContainer extends Component {
    showCategory = (categories) => {
        var { actDeleteCategory } = this.props;
        var result = null;
        if (categories.length > 0) {
            result = categories.map((category, index) => {
                return (
                    <SectionItem
                        actDeleteCategory={actDeleteCategory}
                        key={index}
                        category={category}
                        index={index}
                    />
                );
            });
        }
        return result;
    }
    render() {
        const { categories, actEditCategory } = this.props;
        return (
            <CategoryManagement
                actEditCategory={actEditCategory}
            >
                {this.showCategory(categories)}
            </CategoryManagement>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actDeleteCategory: (id) => {
            dispatch(actDeleteCategoryRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(CategoryContainer));