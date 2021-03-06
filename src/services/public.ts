import {auth, googleProvider} from "../firebase"
import {signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut} from "firebase/auth";
import {userAdapter} from "../adapters/index";
import {User} from "../models/index"
import notify from "../utils/notify";

export const signInWithGoogle = async (): Promise<User | null> => {
    let user: User | null = null;
    try{
        const userCredentials = await signInWithPopup(auth,googleProvider)
        user = userAdapter(userCredentials.user);
        notify('success','Sign in successfully!');
    }catch(error){
        notify('error','Something went wrong :(.');
    }

    return user;
}

export const signIn = async (email: string,password: string): Promise<User | null> => {
    let user: User | null = null;
    try{
        let userCredentials = await signInWithEmailAndPassword(auth,email,password);
        user = userAdapter(userCredentials.user);
        notify('success','Sign in successfully!');
    }catch(error:any){
        if(error.code === 'auth/user-not-found'){
            notify('error','User not found!')
            return null;
        }
        if(error.code === 'auth/wrong-password'){
            notify('error', 'Wrong password!');
            return null;
        }
        notify('error','Something went wrong :(.');
    }

    return user;
}

export const createUser = async (email: string, password: string, name: string): Promise<User | null> => {
    let user: User | null = null;

    try{
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password);
        user = userAdapter({...userCredentials.user, displayName: name});
        notify('success','User created successfully!');
    }catch(error){
        notify('error', 'something went wrong :(.');
    }

    return user;
}

export const signout = (): string => {
    let res = 'undefined';
    try{
        signOut(auth);
        notify('success','Sign out successfully!');
        res = 'success';
    }catch(error){
        notify('error', 'something went wrong :(.');
        res = 'error';
    }
    return res
}