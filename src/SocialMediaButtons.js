import React, { useState } from 'react';
import LoginForm from './LoginForm';

function SocialMediaButtons() {
  const [showFacebookForm, setShowFacebookForm] = useState(false);
  const [showTwitterForm, setShowTwitterForm] = useState(false);
  const [showGoogleForm, setShowGoogleForm] = useState(false);

  const handleFacebookClick = () => {
    setShowFacebookForm(true);
    setShowTwitterForm(false);
    setShowGoogleForm(false);
  };

  const handleTwitterClick = () => {
    setShowFacebookForm(false);
    setShowTwitterForm(true);
    setShowGoogleForm(false);
  };

  const handleGoogleClick = () => {
    setShowFacebookForm(false);
    setShowTwitterForm(false);
    setShowGoogleForm(true);
  };

  return (
    <div className='Allbtn'>
      <button className='btn' onClick={handleFacebookClick}>Facebook</button>
      <button className='btn'  onClick={handleTwitterClick}>Twitter</button>
      <button className='btn'  onClick={handleGoogleClick}>Google</button>
      {showFacebookForm && <LoginForm socialMedia="Facebook" />}
      {showTwitterForm && <LoginForm socialMedia="Twitter" />}
      {showGoogleForm && <LoginForm socialMedia="Google" />}
    </div>
  );
}
export default SocialMediaButtons
