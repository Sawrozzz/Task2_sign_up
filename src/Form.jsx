import React from "react";

const Form = ({ fname, email, pass }) => {
  return (
    <>
      <div className="formInput">
        <input placeholder="Full Name" name={fname}></input>
        <input placeholder="abc@gmail.com" email={email}></input>
        <input placeholder="*******" password={pass}></input>
      </div>
    </>
  );
};

export default Form;
