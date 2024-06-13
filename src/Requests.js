// import { getReq, postReq, putReq } from "./getReq";
// import { useStateValue } from './Context/StateProvider';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// export const ServerPost = (setIsLoading, url, dispatch, dispatchContents) => {
//     postReq(setIsLoading, url)
//     .then(() => {
//       console.log('hello')
//       dispatch(dispatchContents);
//       return true
//     })
//     .catch((error) => {
//       console.log(error)
//         if (error.response && error.response.data && error.response.data.error) toast.error(error.response.data.error)
//         else toast.error('Error contacting server')
//         return false
//     })
// }
//wrong shit