import {useEffect,useState} from "react";
import {auth} from "../firebase";
import store from "../redux/store";
import {userAdapter} from "../adapters/index";


const useAuthStateChanged = () => {
    const [isAuth,setIsAuth] = useState<boolean>(false);

    const handleAuthStateChange = (user: any) => {
        if(user){
            let userAdapted = userAdapter(user);
            store.dispatch({type:'SET_USER',content:userAdapted});
            setIsAuth(true);

            return;
        }

        store.dispatch({type:'SET_USER',content:null});
        setIsAuth(false);
    }

    useEffect(() => {
        let unsuscribe = auth.onAuthStateChanged(handleAuthStateChange);
        return () => unsuscribe();
    },[])

    return isAuth;
}


export default useAuthStateChanged;