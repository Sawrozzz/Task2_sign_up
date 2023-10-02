import { useState } from "react";
import React from "react";

const Form = ({media_type}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
const handleSubmit = (e)=>{
  e.preventDefault();
  alert(`${name} logged in to ${media_type}`);
  setName('');
  setPassword('');
}

  return (
    <>
    <div className="form-class">
    
    <form onSubmit={handleSubmit}>
    <h2>Login successfull to {media_type}</h2>
    <label>
    Enter your name:
    <input type="text" value = {name}
    onChange={(e)=>setName(e.target.value)}
    />
  </label> 
  <br></br> 
  <label>
  Enter your password:
  <input type="password" value = {password}
  onChange={(e)=>setPassword(e.target.value)}
  />
</label> 
<br></br>
<button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
};

export default Form;
