import { CallApi } from '../../../CallApi';
import { complete_order_pickup, get_client_orders, get_order_items, get_restock_completed_items, mark_readyto_print, mark_readyto_ship, send_batch_label, update_item_status, update_readyto_ship } from '../../../Constans/ApiConstans';
import * as types from '../../Types';
export const _Clintorderlist = (payload: any, page_name: any, bottomSheetModalRef: any, loadertype: any, lantype: any) => {
  return async (dispatch: any) => {
    { loadertype === 1 && dispatch({ type: types.LOADER, payload: true }) }
    await CallApi('POST', get_client_orders, payload)
      .then(res => {
        console.log(res, '_ActivePicklistClint');
        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          if (page_name === 'Dashboard') {
            { bottomSheetModalRef && bottomSheetModalRef.current?.present(); }
          }
          // navigation.replace('Login');

          dispatch({ type: types.ORDER_SCREEN_DATA, payload: res.data });

          // ToastMessage({
          //   type: 'type_green',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // });
        } else {
          dispatch({ type: types.ORDER_SCREEN_DATA, payload: [] });
          // ToastMessage({
          //   type: 'type_danger',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // }),
          dispatch({ type: types.USER_LOGIN_MESSAGE, payload: res.message });
        }
      })
      .catch(error => {
        dispatch({ type: types.ORDER_SCREEN_DATA, payload: [] });
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
export const _Clintproductlist = (payload: any, loadertype: any, lantype: any, navigation: any) => {
  return async (dispatch: any) => {
    { loadertype === 1 && dispatch({ type: types.LOADER, payload: true }) }
    await CallApi('POST', get_order_items, payload)
      .then(res => {
        // console.log(res, '_Clintproductlistssss');
        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          // console.log(res,"bapi")
          dispatch({ type: types.ORDER_ITEM_DATA, payload: res.data });
          dispatch({ type: types.ORDER_DATE, payload: res });
        } else {
          navigation.goBack()
          dispatch({ type: types.ORDER_ITEM_DATA, payload: [] });
          // ToastMessage({
          //   type: 'type_danger',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // }),
          dispatch({ type: types.USER_LOGIN_MESSAGE, payload: res.message });
        }
      })
      .catch(error => {
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

export const udatedraftorderItem = (payload: any, getProductsdata: any, callorderlist: any, loadertype: any, lantype: any) => {
  return async (dispatch: any) => {

    { loadertype === 1 && dispatch({ type: types.LOADER, payload: true }) }
    await CallApi('POST', update_item_status, payload)
      .then(res => {
        console.log(res, "sangramudatedraftorderItem")
        dispatch({ type: types.LOADER, payload: false });
        getProductsdata()
        if (res.success === 1) {
          // ToastMessage({
          //   type: 'type_green',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // });
          callorderlist()
          // dispatch({type: types.ORDER_ITEM_DATA, payload: res.data});
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
      .catch(error => {
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
export const udateorderItem = (data: any) => {
  return async (dispatch: any) => {
    dispatch({ type: types.ORDER_ITEM_DATA, payload: data });
  }
}
export const orderReadytoShiped = (data: any) => {
  return async (dispatch: any) => {
    dispatch({ type: types.ORDER_READY_TO_SHIPED, payload: data });
  }
}
export const loaderupdate = (data: any) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: data });
  }
}
export const completeorderpickup = (payload: any, navigationtype: any, navigation: any, lantype: any) => {
  return async (dispatch: any) => {
    if (navigationtype === 'navigation' || navigationtype === 'back') { dispatch({ type: types.LOADER, payload: true }); }
    await CallApi('POST', complete_order_pickup, payload)
      .then(res => {
        console.log(res, "completeorderpickup")
        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {

          if (navigationtype === 'navigation') {
            // ToastMessage({
            //   type: 'type_green',
            //   text: res.message,
            //   position: 'bottom',
            //   time: 3000,
            // });
            navigation.reset({
              index: 0,
              routes: [{ name: 'Dashboard' }],
            });
          } else if (navigationtype === 'back') {
            navigation.goBack()
          }

          // navigation.goBack()
          // dispatch({type: types.ORDER_ITEM_DATA, payload: res.data});
          // dispatch({type: types.ORDER_DATE, payload: res.ORDER_DATE});
        } else {
          if (navigationtype === 'navigation') {
            // ToastMessage({
            //   type: 'type_danger',
            //   text: res.message,
            //   position: 'bottom',
            //   time: 3000,
            // })
            dispatch({ type: types.USER_LOGIN_MESSAGE, payload: res.message });
          }

        }
      })
      .catch(error => {
        dispatch({ type: types.LOADER, payload: false });
        if (navigationtype === 'navigation') {
          // ToastMessage({
          //   type: 'type_danger',
          //   text: lantype.Error_in_server_side,
          //   position: 'bottom',
          //   time: 3000,
          // })
        }
        console.log(error, 'Error While apicall in.');

        dispatch({
          type: types.USER_LOGIN_MESSAGE,
          payload: 'Error in server side.',
        });
      });
  };
};

export const readytoshipedorderItem = (payload: any, screenname: any, setPrintdata: any, navigation: any, lantype: any) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: true });
    await CallApi('POST', mark_readyto_ship, payload)
      .then(res => {
        console.log(res, 'sangram1111')
        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          // ToastMessage({
          //   type: 'type_green',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // });
          if (screenname) {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Dashboard' }],
            });
            // setChangebuttontype('YES')
          }
          setPrintdata(res.data)

          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Dashboard'}],
          // });
          // navigation.goBack()
          // dispatch({type: types.ORDER_ITEM_DATA, payload: res.data});
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
      .catch(error => {
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
export const readytoprint = (payload: any, lantype: any) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: true });
    await CallApi('POST', mark_readyto_print, payload)
      .then(res => {

        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          // ToastMessage({
          //   type: 'type_green',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // });

          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Dashboard'}],
          // });
          // navigation.goBack()
          // dispatch({type: types.ORDER_ITEM_DATA, payload: res.data});
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
      .catch(error => {
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
export const getStockitems = (payload: any, setStockitem: any, setResponsetype: any, setUpdatetype: any, loadertype: number, setCoustomstockoutitem: any, settoberestockdata: any) => {
  return async (dispatch: any) => {
    console.log('loafdertype', loadertype)
    { loadertype === 1 ? dispatch({ type: types.LOADER, payload: true }) : dispatch({ type: types.LOADER, payload: false }) }
    await CallApi('POST', get_restock_completed_items, payload)
      .then(res => {

        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          console.log(res, "kesharnnnnnn")
          console.log(res.toberestock_data, "kesharinnnn")
          setStockitem(res.data)
          setCoustomstockoutitem(res.stockout_data)
          settoberestockdata(res.toberestock_data)
          setResponsetype('yes')
          setUpdatetype(loadertype)
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Dashboard'}],
          // });
          // navigation.goBack()
          // dispatch({type: types.ORDER_ITEM_DATA, payload: res.data});
          // dispatch({type: types.ORDER_DATE, payload: res.ORDER_DATE});
        } else {
          setResponsetype('yes')

        }
      })
      .catch(error => {
        setResponsetype('')
        dispatch({ type: types.LOADER, payload: false });
        // ToastMessage({
        //   type: 'type_danger',
        //   text: 'Error While logging in.',
        //   position: 'bottom',
        //   time: 3000,
        // }),
        //   console.log(error, 'Error While apicall in.');

        // dispatch({
        //   type: types.USER_LOGIN_MESSAGE,
        //   payload: 'Error in server side.',
        // });
      });
  };
};
export const readytobatchlabel = (payload: any, lantype: any, getPickupdata: any) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: true });
    await CallApi('POST', send_batch_label, payload)
      .then(res => {

        dispatch({ type: types.LOADER, payload: false });
        if (res.success === 1) {
          // ToastMessage({
          //   type: 'type_green',
          //   text: res.message,
          //   position: 'bottom',
          //   time: 3000,
          // });
          getPickupdata()
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Dashboard'}],
          // });
          // navigation.goBack()
          // dispatch({type: types.ORDER_ITEM_DATA, payload: res.data});
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
      .catch(error => {
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
}

export const productupdatecb = (payload: any, cb: any) => {
  return async (dispatch: any) => {
    dispatch({ type: types.LOADER, payload: true })
    await CallApi('POST', update_item_status, payload)
      .then(res => {
        console.log(res, 'Data HomeScreen Action');
        dispatch({ type: types.LOADER, payload: false })

        return cb(true, false, res);
      })
      .catch(error => {
        dispatch({ type: types.LOADER, payload: false })
        console.log(error, 'Error While Getting Home Screen data.');
        return cb(false, true, 'Error While Getting Home Screen data.');
      });
  };
};