import * as Types from "../constants/actionTypes";
import CallApi from "../../utils/ConnectApi";
import { toast } from 'react-toastify';
import { css } from 'glamor';

// Handle Check Login Administration
export const actFetchAdminRequest = (auth) => {
    return dispatch => {
        return CallApi('administration/login', 'POST', auth).then(res => {
            if(res.data.status === true)
            {
                dispatch(actFetchAdmin(res.data));
                toast('Successfully Authenticated', {
                    position: toast.POSITION.TOP_RIGHT,
                    className: css({
                        background: '#43a047 !important',
                        color: '#fff !important',
                        boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3) !important',
                      }),
                      progressClassName: css({
                        background: '#fff !important'
                      })
                  });
                localStorage.setItem('UserAccount', JSON.stringify(res.data.result));
                localStorage.setItem('authAccount', JSON.stringify(res.data.result));
                setTimeout( (e)=>{window.location.href="/administration/dashboard"}, 3000);
            }
            else
            {
                toast.error("Error Authenticated!! Please confirm again", {
                    position: toast.POSITION.TOP_LEFT
                  });
            }
        });
    }
}
export const actFetchAdmin = (auth) => {
    return {
        type: Types.CHECK_LOGIN_ADMIN,
        auth
    }
}

// Handle Check Login User
export const actFetchUserLoginRequest = (user) => {
    return dispatch => {
        return CallApi('user/login', 'POST', user).then(res => {
            if(res.data.status === true)
            {
                dispatch(actFetchUserLogin(res.data));
                toast('Successfully Authenticated', {
                    position: toast.POSITION.TOP_CENTER,
                    className: css({
                        background: '#43a047 !important',
                        color: '#fff !important',
                        boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3) !important',
                      }),
                      progressClassName: css({
                        background: '#fff !important'
                      })
                  });
                localStorage.setItem('UserAccount', JSON.stringify(res.data.result));
                setTimeout( (e)=>{window.location.href="/"}, 3000);
            }
            else
            {
                toast.error("Error Authenticated!! Please confirm again", {
                    position: toast.POSITION.BOTTOM_CENTER
                  });
            }
        });
    }
}
export const actFetchUserLogin = (user) => {
    return {
        type: Types.CHECK_LOGIN_ADMIN,
        user
    }
}

// Check Register for User
export const actFetchUserRequest = (user) => {
    return dispatch => {
        return CallApi('user/register', 'POST', user).then(res => {
            if(res.data.status === true)
            {
                dispatch(actFetchUserRegister(res.data));
                toast.success('Successfully Register', {
                    position: toast.POSITION.TOP_CENTER
                  });
                setTimeout( (e)=>{window.location.href="/user/sign-in"}, 3000);
            }
            else
            {
                toast.error("Error Register!! Please confirm again", {
                    position: toast.POSITION.BOTTOM_CENTER
                  });
            }
        })
    }
}
export const actFetchUserRegister = (user) => {
    return {
        type: Types.REGISTER_USER,
        user
    }
}
