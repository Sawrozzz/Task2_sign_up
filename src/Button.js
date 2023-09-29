import React from "react";


function Button({ logo_src, name, bg_color}) {
  return (
    <>
     
       <button className="btn" style={{backgroundColor:bg_color}}> <img src={logo_src} alt={name}/>
       {name}</button>
    
    </>
  );
}

export default Button;

