//const API = 'https://api.thbred.com/thbredpickpack/api/';
// const API = 'http://192.168.66.128/thbredpickpack/api/';
const API = "http://192.168.3.65/thbredpickpack/api/"; //dev
//const API = 'http://picklist.thbred.com/api/';   //prod

const loaddata = async (url: string, options: any) => {
  console.log(url, options);
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error, "API CONTROLLER PAGE");
  }
};

// export const CallApi = async (method:string, apiPath:string, params:any) => {
//   let token = await AsyncStorage.getItem('access_token');

//   // console.log(token, "Token")
//   // alert(token,"Token")
//   //   const url = `${API + apiPath}`;
//   let options = {
//     method: method,
//     headers: {
//       Authorization: `Bearer ${token}`,
//       Accept: 'application/json',
//       'Content-Type': 'multipart/form-data',
//     },
//     body: params,
//   };

//   return loaddata(apiPath, options);
// };

export const CallApi = async (method: string, apiPath: string, params: any) => {
  //  console.log(params,"params")

  // alert(token,"Token")
  const url = `${API + apiPath}`;
  console.log(url, "url");
  let options = {
    method: method,
    headers: {
      // Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: params,
  };

  return loaddata(url, options);
};
