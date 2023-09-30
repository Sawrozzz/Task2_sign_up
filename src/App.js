// import React from "react";
// import Button from "./Button";
// import Alldata from "./Data";
// import Form from "./Form";

// function App() {
//   return (
//     <>
//       <div class="main">
//         <h1>Sign up with:</h1>
//         <p>
//             W3docs provides free learning materials for programming languages
//             like HTML, CSS, Java Script, PHP etc.
      
//         </p>
//         <div className="allsite">
//           {Alldata.map((e, index) => {
//             return (
//               <Button
//                 key={index}
//                 name={e.name}
//                 logo_src={e.logo_src}
//                 bg_color={e.bg_color}
//               />
//             );
//           })}
//         </div>
//         <Form />
//       </div>
//     </>
//   );
// }

// export default App;


import React from 'react';
import SocialMediaButtons from './SocialMediaButtons';

function App() {
  return (
    <>
    <div className="main">
    <h1 className='header'>Sign Up Page </h1>
    <p>This is a sign up page that contain three buttons<br></br> for Facebook, Twitter & Google.</p>
      <SocialMediaButtons />
    </div>
    </>
  );
}

export default App;

