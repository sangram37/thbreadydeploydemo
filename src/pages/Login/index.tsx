import React, { useState, useEffect} from 'react';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {
  loginAccount,
  logoutCurrentUser,
  setusername_empno,
  loaderclose,
  loginaccounttype,
} from '../../Redux/Actions/LoginScreenAction';
// import { background, toplogo } from '../../Constans/ImagePath';


const Login = (props: any) => {
  let navigate = useNavigate();
  const inputs = { Name: '', Email: '', Phone: '', Message: '' };
  const [inputData, setinputData] = useState(inputs);
  const [languagetoggle, setLanguagetoggle] = useState(false);
  const [selectedLanguage,setSelectedLanguage] = useState("English");

  useEffect(() => {
    props.loaderclose();
    // getactive_datatype();
    props.logoutCurrentUser();
  
  }, []);

  // const getactive_datatype = () => {
  //   let form: string = JSON.stringify({
  //     request_type: 'get_active_tablet_users',
  //   });
  //   props.loginaccounttype(form);
  // };

  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('yey success', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    navigate ("/orders")
  };
  const languageHandler =()=>{
    setLanguagetoggle(!languagetoggle)
  }
  const selectLanguageHandler = (e:any)=>{
    setSelectedLanguage(e.target.innerText);
    setLanguagetoggle(!languagetoggle)
  }

  return (
    <>
      
      <div className="headers">
        <div className="menu_list">
          <div className="login_bg">
            {/* <img src={background} alt="" /> */}
          </div>
          <div className="login_modal">
            <button className='loginLanguage' onClick={languageHandler}>{selectedLanguage}</button>
            {languagetoggle? <div className="language_dropdown">
              <ul>
                <li onClick={(e)=>selectLanguageHandler(e)}>English</li>
                <li onClick={(e)=>selectLanguageHandler(e)}>Spanish</li>
              </ul>
            </div>:null}
           
            <div className="login_wrapper">
              <form action="">
                <div className="logo_login">
                  {/* <img src={toplogo} alt="" /> */}
                </div>
                <h4>Sign In</h4>
                <div>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Employee number"
                    value={inputData.Name}
                    onChange={(e) => setinputData({ ...inputData, Name: e.target.value })}
                  />
                </div>
                <div>
                  <select>
                    <option value="username">username</option>
                    <option value="user1">user1</option>
                    <option value="user2">user2</option>
                  </select>
                </div>
                <button className="login_submit btnn" type="submit" onClick={onsubmit}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state,'state_login*********************')
  return {

    loginscreendata: state.LoginScreenReducer,
    loader: state.LoaderReducer.loader,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loginAccount,
      logoutCurrentUser,
      setusername_empno,
      loaderclose,
      loginaccounttype,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
