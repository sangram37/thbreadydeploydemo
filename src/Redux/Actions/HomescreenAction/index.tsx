import { CallApi } from "../../../CallApi";
import {
  start_end_time,
  get_active_picklist_client,
} from "../../../Constans/ApiConstans";
import * as types from "../../Types";

export const setIncriment = (status: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: types.VALUE_CHANGE_INC,
      payload: status,
    });
    // return cb(true, false);
  };
};

export const setDicriment = (status: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: types.VALUE_CHANGE_DIC,
      payload: status,
    });
    // return cb(true, false);
  };
};
export const setShiftdata = (status: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: types.SHIFT_LOG,
      payload: status,
    });
    // return cb(true, false);
  };
};
export const starttime = (
  payload: any
  // navigation: any, lantype: any
) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: true });
    await CallApi("POST", start_end_time, payload)
      .then((res) => {
        console.log(res, "dashboarddata");
        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          dispatch({ type: types.TIME_LOG, payload: "Start" });
          // dispatch({type: types.HOME_SCREEN_DATA, payload: res.data});

          // ToastMessage({
          //   type: 'type_green',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // });
        } else {
          // ToastMessage({
          //   type: 'type_danger',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // }),
          dispatch({ type: types.USER_LOGIN_MESSAGE, payload: res.message });
        }
      })
      .catch((error) => {
        dispatch({ type: types.LOADER, payload: false });
        // ToastMessage({
        //   type: 'type_danger',
        //   text: lantype.Error_in_server_side,
        //   position: 'bottom',
        //   time: 3000,
        // }),
        console.log(error, "Error While logging in.");

        dispatch({
          type: types.USER_LOGIN_MESSAGE,
          payload: "Error in server side.",
        });
      });
  };
};
export const endtime = (
  payload: any
  // navigation: any, lantype: any
) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: true });
    await CallApi("POST", start_end_time, payload)
      .then((res) => {
        console.log(res);
        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          // navigation.replace('Login');
          dispatch({ type: types.TIME_LOG, payload: "Stop" });
          // dispatch({type: types.USER_DATA, payload: res.data});

          // ToastMessage({
          //   type: 'type_green',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // });
        } else {
          // ToastMessage({
          //   type: 'type_danger',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // }),
          dispatch({ type: types.USER_LOGIN_MESSAGE, payload: res.message });
        }
      })
      .catch((error) => {
        dispatch({ type: types.LOADER, payload: false });
        // ToastMessage({
        //   type: 'type_danger',
        //   text: lantype.Error_in_server_side,
        //   position: 'bottom',
        //   time: 3000,
        // }),
        console.log(error, "Error While logging in.");

        dispatch({
          type: types.USER_LOGIN_MESSAGE,
          payload: "Error in server side.",
        });
      });
  };
};

export const _ActivePicklistClint = (
  payload: any
  // lantype: any
) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: true });
    await CallApi("POST", get_active_picklist_client, payload)
      .then((res) => {
        console.log(res, "_ActivePicklistClint,get_active_picklist_client");
        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          // navigation.replace('Login');
          dispatch({ type: types.LOADER, payload: false });
          dispatch({ type: types.HOME_SCREEN_DATA, payload: res.data });
          dispatch({ type: types.CURRENT_VERSION, payload: res.CURR_VERSION });

          // ToastMessage({
          //   type: 'type_green',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // });
        } else {
          dispatch({ type: types.LOADER, payload: false });
          // ToastMessage({
          //   type: 'type_danger',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // }),
          dispatch({ type: types.USER_LOGIN_MESSAGE, payload: res.message });
        }
      })
      .catch((error) => {
        dispatch({ type: types.LOADER, payload: false });
        // ToastMessage({
        //   type: 'type_danger',
        //   text: lantype.Error_in_server_side,
        //   position: 'bottom',
        //   time: 3000,
        // }),
        console.log(error, "Error While logging in.");

        dispatch({
          type: types.USER_LOGIN_MESSAGE,
          payload: "Error in server side.",
        });
      });
  };
};
