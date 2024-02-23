import * as types from '../../Types';

interface State {
    pickcompleted: any;
  readytoshiporders:any
  labelprintedorders:any
}

const initialState: State = {
    pickcompleted: [],
    readytoshiporders:[],
    labelprintedorders:[]
};

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case types.PICKUP_COMPLETED:
      return {...state, pickcompleted: action.payload};
    case types.READY_TO_SHIPORDERS:
      return {...state, readytoshiporders: action.payload};
    case types.LABEL_PRINTED_ORDERS:
      return {...state, labelprintedorders: action.payload};
    default:
      return state;
  }
};
