import React, { Component } from 'react';
import ProductsPage from '../../views/Pages/ProductsPage/ProductsPage';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actionFetchCategoryRequest } from '../actions/index';
import { GetProductsFollowCategory } from '../actions/actionsCategory';

class ProductContainer extends Component {
    componentWillMount() {
        this.props.fetchAllProduct();
    }
    render() {
        var { match, fetchAllProduct, products, fetchAllCategory, categories, productsFollowCategory, GetProductsFollowCategory } = this.props;
        return (
            <ProductsPage
                match={match}
                GetProductsFollowCategory={GetProductsFollowCategory}
                productsFollowCategory={productsFollowCategory}
                products={products}
                categories={categories}
                fetchAllCategory={fetchAllCategory}
                fetchAllProduct={fetchAllProduct}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        categories: state.categories,
        productsFollowCategory: state.productsFollowCategory
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProduct: () => {
            dispatch(actFetchProductsRequest());
        },
        fetchAllCategory: () => {
            dispatch(actionFetchCategoryRequest());
        },
        GetProductsFollowCategory: (id) => {
            dispatch(GetProductsFollowCategory(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);