
import { CallApi } from '../../../CallApi';

import { get_containers } from '../../../Constans/ApiConstans';
import * as types from '../../Types';
export const addBarcodeValue = (data: any) => {
  return async (dispatch: any) => {
    dispatch({ type: types.BARCODE_DATA, payload: data });
  }
}
export const getcontainers = (payload: any, setScannervalue: any, lantype: any) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: true });
    await CallApi('POST', get_containers, payload)
      .then((res: any) => {
        console.log(res, 'BARCODE_VALUE');
        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          setScannervalue(res.data)
          dispatch({ type: types.BARCODE_VALUE, payload: res.data });
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
      .catch((error: any) => {
        dispatch({ type: types.LOADER, payload: false });
        // ToastMessage({
        //   type: 'type_danger',
        //   text: lantype.Error_in_server_side,
        //   position: 'bottom',
        //   time: 3000,
        // }),
        console.log(error, 'Error While apicall in.');

        dispatch({
          type: types.USER_LOGIN_MESSAGE,
          payload: 'Error in server side.',
        });
      });
  };
};