import React, { useState } from "react";
import Guest from "./components/Guest";
import User from "./components/User";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  let page;


  if (isLoggedIn) {
    page = <User logout={() => setIsLoggedIn(false)} />;
  }
  else {
    page = <Guest login={() => setIsLoggedIn(true)} />;
  }


  return (

    <div>

      {page}

    </div>

  );

}

export default App;