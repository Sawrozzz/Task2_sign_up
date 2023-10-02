import React from "react";
import Form from "./Form";
import { useState } from "react";



function Button({bg_color, logo_src,name}) {
  const [facebook, setFacebook] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [google, setGoogle] = useState(false);
 

  const handleonClickFacebook = () => {
    setFacebook(true);
    setTwitter(false);
    setGoogle(false);
  };
  const handleonClickTwitter = () => {
    setFacebook(false);
    setTwitter(true);
    setGoogle(false);
  };
  const handleonClickGoogle = () => {
    setFacebook(false);
    setTwitter(false);
    setGoogle(true);
  };
  return (

    <div className="Allbtn">
      <button className="fb-btn" onClick={handleonClickFacebook}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png"
      alt="facebook" />
      Facebook
      </button>
      <button className="tw-btn" onClick={handleonClickTwitter}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAdVBMVEVHcEz////////////5/P7///////////9isOBbr+D6/P7////2+/7A4PEMnNoAk9MAnt0AjssAn9+v1/D7/f4AkNIApuZqwvIqoNwAquwvqOjj9P6cze4CqO++5/5Ls+wAqOsArPBCtvj9//8AqvR+yfY1peTfjY31AAAAJ3RSTlMAAQQiNSsXDX6WTAhCbLra5cP+Xm38/7ij/9t+lOqTsdP/xV7+pcJk0FnuAAABIElEQVR4AbWSRWLEMAwAE7MdZqal/z+xktzlaztBayxz8HeEyFfQP4wLIVXwRCuNCq0WxlrjVKSUYhSJoeTzdJJmeZ6nxlgTK5JJUSSS6sm0JPK8LCrfeJ01mY2xZZeVZUuUaawp03VQt6+ElEmOYhjadpw4IynmvAWdWtMvg2dZ4yjwmdtCLeX7DvEDOTlwxBli0BQ0Boq4bIoMNbscB3pwg5dXfZfadRghQeqyTCQJPu3Lr/DydI4eksGQngoTOXtKOe0PBXRx8Iqsr/tAEhut1UOETGvupm4hSe7ZaBQbu93GZRhQLl0tw+ApXZ81Daz4AuzrmXvnYdzV8w3Zrmvt/ECfVvP4XANnJ5T+Oj+R4hIurjTDNr88Yywk8f/8AKCTH8JHEkbzAAAAAElFTkSuQmCC"
      alt="twitter"/>
      Twitter
      </button>
      <button className="gg-btn" onClick={handleonClickGoogle}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdby_ZE048_VtvktPmb1zRKPsIeBMZmVZpRg&usqp=CAU" />
       Google
      </button>
      {facebook && <Form media_type="Facebook" />}
      {twitter && <Form media_type="Twitter" />}
      {google && <Form media_type="Google" />}
    </div>
  );
}
export default Button;

