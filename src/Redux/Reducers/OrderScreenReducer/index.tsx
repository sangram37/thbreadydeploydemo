import * as types from '../../Types';

interface State {
  orderScreenData: any;
  orderitemdata:any,
  orderdate:any,
  readytoShiped:any
}

const initialState: State = {
  orderScreenData: [],
orderitemdata:[],
orderdate:{},
readytoShiped:[]
};

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case types.ORDER_SCREEN_DATA:
      return {...state, orderScreenData: action.payload};
    case types.ORDER_ITEM_DATA:
      return {...state, orderitemdata: action.payload};
    case types.ORDER_DATE:
      return {...state, orderdate: action.payload};
    case types.ORDER_READY_TO_SHIPED:
      return {...state, readytoShiped: action.payload};
    default:
      return state;
  }
};
