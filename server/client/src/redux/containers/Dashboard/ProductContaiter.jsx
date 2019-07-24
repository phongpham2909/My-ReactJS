import React, { Component } from 'react';
import ProductManagement from "../../../views/Dashboard/Products/ProductManagement";
import  { connect } from "react-redux";
import { actDeleteProductRequest, FILTER_TABLE_PRODUCT } from "../../actions/index";

class ProductContaiter extends Component {
    render() {
        const { products, SearchProduct , ProductFilterTable, deleteProduct, handleProductFilterTable }= this.props;
        return (
            <ProductManagement
            products={products}
            SearchProduct={SearchProduct}
            ProductFilterTable={ProductFilterTable}
            deleteProduct={deleteProduct}
            handleProductFilterTable={handleProductFilterTable}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
      products: state.products, 
      SearchProduct: state.SearchProduct,
      ProductFilterTable: state.productFilterTable,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      deleteProduct: (id) => {
        dispatch(actDeleteProductRequest(id));
      },
      handleProductFilterTable: (filter) => {
        dispatch(FILTER_TABLE_PRODUCT(filter));
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ProductContaiter);