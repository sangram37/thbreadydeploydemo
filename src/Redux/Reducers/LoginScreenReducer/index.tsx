import { en } from "../../../Constans/translation";
import * as types from "../../Types";

interface State {
  userdata: any;
  message: string;
  logintype: any;
  empno: any;
  username: any;
  loginusertype: any;
  languagetype: any;
}

const initialState: State = {
  userdata: {},
  message: "",
  logintype: "",
  empno: "",
  username: "",
  loginusertype: [],
  languagetype: en,
};

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case types.USER_DATA:
      return { ...state, userdata: action.payload };
    case types.USER_LOGIN_SUCCESS:
      return { ...state, logintype: action.payload };
    case types.USER_LOGIN_MESSAGE:
      return { ...state, message: action.payload };
    case types.USER_NAME:
      return { ...state, username: action.payload };
    case types.USER_EMPONO:
      return { ...state, empno: action.payload };
    case types.USER_LOGIN_TYPE:
      return { ...state, loginusertype: action.payload };
    case types.LANGUAGE_TYPE:
      return { ...state, languagetype: action.payload };
    default:
      return state;
  }
};
