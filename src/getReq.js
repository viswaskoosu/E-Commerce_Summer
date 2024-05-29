import axios from 'axios'
export const getReq = async (url, data={}, headers={}) => {
  // return new Promise((resolve, reject) => {

  // })
  let responseData = {}
  // console.log("ddddddddddd", headers)
  await axios.get(process.env.REACT_APP_API_URL+url, {
      headers: headers
    })
  .then(response => {responseData = response.data})
  .catch(error => {throw error})
  console.log(responseData, 1111)
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(2)
  //   }, 5000)
  // })
  return responseData
}

