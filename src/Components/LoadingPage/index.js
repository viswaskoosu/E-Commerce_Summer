import ReactLoading from 'react-loading'
import React from 'react'

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        // border: '2px solid red',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactLoading type="spin" color="#FFAD33" height={200} width={100} />
    </div>
  )
}

export default LoadingPage