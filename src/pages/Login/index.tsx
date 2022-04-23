import { useState } from "react";
import Login from "../../components/Login/index";
import Signup from "../../components/Signup/index";

const Auth = () => {
    const [onLogin,setOnLogin] = useState<boolean>(true);

    return onLogin ? <Login setOnLogin={setOnLogin} /> : <Signup setOnLogin={setOnLogin} />;
}


export default Auth;