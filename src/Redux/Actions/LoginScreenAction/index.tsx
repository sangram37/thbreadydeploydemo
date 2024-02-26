import * as types from "../../Types";
import { CallApi } from "../../../CallApi";
import { login, login_type_active_table } from "../../../Constans/ApiConstans";

export const loginAccount = (
  payload: any,
  navigation: any
  // lantype: any
) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: true });
    await CallApi("POST", login, payload)
      .then((res) => {
        console.log(res);
        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          navigation.replace("Dashboard");
          storeData(res.data.id);
          dispatch({ type: types.USER_DATA, payload: res.data });
          dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.success });
          dispatch({ type: types.USER_LOGIN_MESSAGE, payload: res.message });
          // ToastMessage({
          //   type: 'type_green',
          //   text: res.message,
          //   position: 'top',
          //   time: 3000,
          // });
        } else {
          // ToastMessage({
          //   type: 'type_danger',
          //   text: res.message,
          //   position: 'top',
          //   time: 3000,
          // }),
          dispatch({ type: types.USER_LOGIN_SUCCESS, payload: 2 });
          dispatch({ type: types.USER_LOGIN_MESSAGE, payload: res.message });
        }
      })
      .catch((error) => {
        dispatch({ type: types.LOADER, payload: false });
        // ToastMessage({
        //   type: 'type_danger',
        //   text: lantype.Error_in_server_side,
        //   position: 'top',
        //   time: 3000,
        // }),
        console.log(error, "Error While logging in.");
        dispatch({ type: types.USER_LOGIN_SUCCESS, payload: 3 });
        dispatch({
          type: types.USER_LOGIN_MESSAGE,
          payload: "Error While logging in.",
        });
      });
  };
};
export const setusername_empno = (
  empno: any
  // username: any
) => {
  return async (dispatch: any) => {
    dispatch({
      type: types.USER_EMPONO,
      payload: empno,
    });
    dispatch({
      type: types.USER_NAME,
      // payload: username,
      payload: "manoj",
    });
    // return cb(true, false);
  };
};
const storeData = async (value: any) => {
  try {
    await localStorage.setItem("@user_id", value);
  } catch (e) {
    // saving error
  }
};

const isLogingOut = () => ({ type: types.CLEAR_DATA });
export const logoutCurrentUser = () => {
  return (dispatch: any) => {
    dispatch(isLogingOut());
  };
};
export const loaderclose = () => {
  return (dispatch: any) => {
    dispatch({
      type: types.LOADER,
      payload: false,
    });
  };
};
export const loaderstart = () => {
  return (dispatch: any) => {
    dispatch({
      type: types.LOADER,
      payload: true,
    });
  };
};
export const languagetype = (value: any) => {
  return (dispatch: any) => {
    console.log("sangram,jjjjj");
    dispatch({
      type: types.LANGUAGE_TYPE,
      payload: value,
    });
  };
};
export const logoutAccount = (
  payload: any,
  navigation: any
  // lantype: any
) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: true });
    await CallApi("POST", login, payload)
      .then((res) => {
        console.log(res);
        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          dispatch({ type: types.LOADER, payload: false });
          navigation.replace("Login");
          // logoutCurrentUser();
          // ToastMessage({
          //   type: 'type_green',
          //   text: res.message,
          //   position: 'top',
          //   time: 3000,
          // });
          // dispatch({type: types.USER_LOGIN_MESSAGE, payload: res.message});
          // dispatch({type: types.USER_LOGIN_SUCCESS, payload: ''});
        } else {
          dispatch({ type: types.LOADER, payload: false });
          // ToastMessage({
          //   type: 'type_danger',
          //   text: res.message,
          //   position: 'top',
          //   time: 3000,
          // });
          dispatch({ type: types.USER_LOGIN_MESSAGE, payload: res.message });
        }
      })
      .catch((error) => {
        console.log(error, "Error While logging in.");
        dispatch({ type: types.LOADER, payload: false });
        dispatch({ type: types.USER_LOGIN_SUCCESS, payload: 3 });
        // ToastMessage({
        //   type: 'type_danger',
        //   text: lantype.Error_in_server_side,
        //   position: 'top',
        //   time: 3000,
        // }),
        dispatch({
          type: types.USER_LOGIN_MESSAGE,
          payload: "Error While logging in.",
        });
      });
  };
};
export const loginaccounttype = (
  payload: any,
  setModalVisible: any
  // lantype: any
) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: true });
    await CallApi("POST", login_type_active_table, payload)
      .then((res) => {
        console.log(res);
        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          dispatch({ type: types.USER_LOGIN_TYPE, payload: res.data });
          setModalVisible(true);
          // dispatch({type: types.USER_LOGIN_SUCCESS, payload: ''});
        } else {
          // ToastMessage({
          //   type: 'type_danger',
          //   text: res.message,
          //   position: 'top',
          //   time: 3000,
          // });
        }
      })
      .catch((error) => {
        console.log(error, "Error While logging in.");
        // ToastMessage({
        //   type: 'type_danger',
        //   text: lantype.Error_in_server_side,
        //   position: 'top',
        //   time: 3000,
        // }),
        dispatch({
          type: types.USER_LOGIN_MESSAGE,
          payload: "Error While logging in.",
        });
      });
  };
};
