import * as Types from "../constants/actionTypes";
import CallApi from "../../utils/ConnectApi";

// GET request for customer by ID
export const GetProductsFollowCategory = (id) => {
    return dispatch => {
        return CallApi(`products-follow-category/${id}`, 'GET', null).then(res => {
            dispatch(getProductsFollowCategory(res.data))
        });
    }
}
export const getProductsFollowCategory = (products) => {
    return {
        type: Types.GET_PRODUCT_FOLLOW_CATEGORY,
        products
    }
}
// Category actions
export const fetchAllSizeCategory = (sizes) => {
    return {
        type: Types.FETCH_ALL_SIZE_CATEGORY,
        sizes
    }
}
export const actionFetchSizeCategoryRequest = () => {
    return dispatch => {
        return CallApi('size-category', 'GET', null).then(res => {
            dispatch(fetchAllSizeCategory(res.data));
        });
    }
}
// Actions EDIT GET category
export const actGetSizeCategoryRequest = (id) => {
    return dispatch => {
        return CallApi(`size-category/${id}`, 'GET', null).then(res => {
            dispatch(actGetSizeCategory(res.data));
        });
    }
}
export const actGetSizeCategory = (size) => {
    return {
        type: Types.CATALOG_EDIT_SIZE,
        size
    }
}
// Actions POST Add category
export const actAddSizeCategory = (size) => {
    return {
        type: Types.CATALOG_ADD_SIZE,
        size
    }
}
export const actAddSizeCategoryRequest = (size) => {
    return dispatch => {
        return CallApi('size-category', 'POST', size).then(res => {
            dispatch(actAddSizeCategory(res.data));
        });
    }
}
// Actions PUT update category
export const actUpdateSizeCategory = (size) => {
    return {
        type: Types.CATALOG_SAVE_SIZE,
        size
    }
}
export const actUpdateSizeCategoryRequest = (size) => {
    return dispatch => {
        return CallApi(`size-category/${size.sizeID}`, 'PUT', size).then(res => {
            dispatch(actUpdateSizeCategory(res.data));
        });
    }
}
// DELETE request for category
export const actDeleteSizeCategoryRequest = (id) => {
    return dispatch => {
        return CallApi(`size-category/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteSizeCategory(id))
        })
    }
}
export const actDeleteSizeCategory = (id) => {
    return {
        type: Types.CATALOG_DELETE_SIZE,
        id
    }
}