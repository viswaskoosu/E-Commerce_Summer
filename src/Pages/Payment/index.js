import React, { useState } from "react";
import "./Payment.css";
import Header from "../../Components/Header";

function Payment() {
  return (
    <>
      <Header />
      <div className="payment">
        <button>Pay Now</button>
      </div>
    </>
  );
}

export default Payment;
