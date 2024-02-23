
import * as types from "../../Types";

interface State {
    loader: boolean;
}

const initialState: State = {
    loader:false,

};

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
      case types.LOADER:
        return { ...state, loader:action.payload};    
        default:
          return state
  }
};