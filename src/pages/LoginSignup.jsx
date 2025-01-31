import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginSignup = () => {
  const [isRegister, setIsRegister] = useState(false);

  
  return (
    <div>
      {isRegister ? <Register setFormType = {setIsRegister}/> : <Login setFormType = {setIsRegister}/>}
    </div>
  );
};

export default LoginSignup;
