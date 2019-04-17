import React, { Component } from 'react';
import SizeCategory from "../../../views/Dashboard/SizeCategory/SizeCategory";
import SectionItem from "../../../views/Dashboard/SizeCategory/Sections/SectionItem";
import { actDeleteSizeCategoryRequest, actionFetchSizeCategoryRequest } from '../../actions/actionsCategory';
import { connect } from 'react-redux';

class SizeCategoryContainer extends Component {
    componentDidMount(){
        this.props.actFetchAllSize()
    }
    showSizeCategory = (size) => {
        var { actDeleteSizeCategory } = this.props;
        var result = null;
        if (size.length > 0) {
            result = size.map((size, index) => {
                return (
                    <SectionItem
                        actDeleteSizeCategory={actDeleteSizeCategory}
                        key={index}
                        size={size}
                        index={index}
                    />
                );
            });
        }
        return result;
    }
    render() {
        var { size } = this.props;
        return (
            <SizeCategory>
                {this.showSizeCategory(size)}
            </SizeCategory>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        size: state.size,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actDeleteSizeCategory: (id) => {
            dispatch(actDeleteSizeCategoryRequest(id));
        },
        actFetchAllSize: () => {
            dispatch(actionFetchSizeCategoryRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SizeCategoryContainer);