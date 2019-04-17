import * as Types from "../constants/actionTypes";
import CallApi from "../../utils/ConnectApi";
import { toast } from 'react-toastify';
import { css } from 'glamor';
import * as Message from "../constants/message";

// GET request for administration by ID
export const actAdministrationById = (id) => {
    return dispatch => {
        return CallApi(`administration/profile/${id}`, 'GET', null).then(res => {
            dispatch(actFetchAdministration(res.data))
        });
    }
}
export const actFetchAdministration = (info) => {
    return {
        type: Types.FETCH_ADMIN_PROFILE,
        info
    }
}
// POST Update administration
export const actUpdateInfoAdmin = (info) => {
    return {
        type: Types.UPDATE_INFO_ADMINISTRATION,
        info
    }
}
export const actUpdateInfoAdministration = (info) => {
    return dispatch => {
        return CallApi(`administration/profile/${info.administrationID}`, 'PUT', info).then(res => {
            if (res.status === 200) {
                dispatch(actUpdateInfoAdmin(res.data));
                toast(Message.MSG_UPDATE_CUSTOMER_SUCCESS, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: css({
                        background: '#43a047 !important',
                        color: '#fff !important',
                        boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3) !important',
                    }),
                    progressClassName: css({
                        background: '#fff !important'
                    })
                });
                setTimeout((e) => { window.location.reload() }, 2000);
            }
            else {
                toast.error(Message.MSG_UPDATE_CUSTOMER_FAIL, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                setTimeout((e) => { window.location.reload() }, 2000);
            }

        });
    }
}