import * as types from '../../Types';

interface State {
  homeScreenData: any;
  value: any;
  time_log: any;
  shiftdata: any;
  curr_veriosn:any;
}

const initialState: State = {
  homeScreenData: [],
  value: 0,
  time_log: '',
  shiftdata: '',
  curr_veriosn:''
};

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case types.HOME_SCREEN_DATA:
      return {...state, homeScreenData: action.payload};
    case types.TIME_LOG:
      return {...state, time_log: action.payload};
    case types.SHIFT_LOG:
      return {...state, shiftdata: action.payload};
    case types.CURRENT_VERSION:
      return {...state, curr_veriosn: action.payload};
    default:
      return state;
  }
};
