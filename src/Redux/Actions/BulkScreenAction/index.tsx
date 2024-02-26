import { CallApi } from "../../../CallApi";

import { get_pickup_completed_orders } from "../../../Constans/ApiConstans";
import * as types from "../../Types";

export const getpickupcompleteorders = (
  payload: any
  // lantype: any
) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: true });
    await CallApi("POST", get_pickup_completed_orders, payload)
      .then((res) => {
        console.log(res.data.labelprintedorders, "COMPLETE_PICKUP_ORDERS");
        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          // setScannervalue(res.data)
          dispatch({
            type: types.READY_TO_SHIPORDERS,
            payload: res.data.readytoshiporders,
          });
          dispatch({
            type: types.PICKUP_COMPLETED,
            payload: res.data.pickupcompleted,
          });
          dispatch({
            type: types.LABEL_PRINTED_ORDERS,
            payload: res.data.labelprintedorders,
          });
          // dispatch({type: types.ORDER_DATE, payload: res.ORDER_DATE});
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
        console.log(error, "Error While apicall in.");

        dispatch({
          type: types.USER_LOGIN_MESSAGE,
          payload: "Error in server side.",
        });
      });
  };
};
export const updatepickupcomlete = (data: any) => {
  return (dispatch: any) => {
    dispatch({ type: types.PICKUP_COMPLETED, payload: data });
  };
};

export const updatePrintdata = (data: any) => {
  return (dispatch: any) => {
    dispatch({ type: types.READY_TO_SHIPORDERS, payload: data });
  };
};
