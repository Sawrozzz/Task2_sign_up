import React from "react";
import Button from "./Button";
import Alldata from "./Data";
import Form from "./Form";

function App() {
  return (
    <>
      <div class="main">
        <h1>Sign up with:</h1>
        <p>
            W3docs provides free learning materials for programming languages
            like HTML, CSS, Java Script, PHP etc.
      
        </p>
        <div className="allsite">
          {Alldata.map((e, index) => {
            return (
              <Button
                key={index}
                name={e.name}
                logo_src={e.logo_src}
                bg_color={e.bg_color}
              />
            );
          })}
        </div>
        <Form />
      </div>
    </>
  );
}

export default App;
