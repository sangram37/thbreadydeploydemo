import * as types from '../../Types';

interface State {
  barcodedata: any;
  barcodesvalue:any
 
}

const initialState: State = {
  barcodedata: [],
  barcodesvalue:[]

};

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case types.BARCODE_DATA:
      return {...state, barcodedata: action.payload};
    case types.BARCODE_VALUE:
      return {...state, barcodesvalue: action.payload};
    default:
      return state;
  }
};
