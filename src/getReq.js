import axios from 'axios'
export const getReq = async (setIsLoading, url, data={}, headers={}) => {
  // return new Promise((resolve, reject) => {

  // })
  setIsLoading(true)
  let responseData = {}
  // console.log("ddddddddddd", headers)
   await axios.get(process.env.REACT_APP_API_URL+url, data, {
      headers: headers
    })
  .then(response => {responseData = response.data})
  .catch(error => {throw error})
  // console.log(responseData, 1111)
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(2)
  //   }, 5000)
  // })
  .finally(() => setIsLoading(false))
  if (responseData.error){
    throw new Error(responseData.error)
  }
  return responseData
}

export const putReq = async (setIsLoading, url, data={}) => {
  // console.log(process.env.REACT_APP_API_URL+url)
  setIsLoading(true)
  let responseData = {}
   await axios.put(process.env.REACT_APP_API_URL+url, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
      }
    })
  .then(response => {responseData = response.data})
  .catch(error => {throw error})
  // console.log(responseData, 1111)
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(2)
  //   }, 5000)
  // })
  .finally(() => setIsLoading(false))
  if (responseData.error){
    throw new Error(responseData.error)
  }
  return responseData
}


