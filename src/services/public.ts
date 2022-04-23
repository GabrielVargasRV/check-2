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

export const signIn = async (email: string,password: string) => {
    let user: User | null = null;
    try{
        let userCredentials = await signInWithEmailAndPassword(auth,email,password);
        user = userAdapter(userCredentials.user);
        notify('success','Sign in successfully!');
    }catch(error){
        notify('error','Something went wrong :(.');
    }

    return user;
}

export const createUser = async (email: string, password: string, name: string): Promise<User | null> => {
    let user: User | null = null;

    try{
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password);
        user = userAdapter(userCredentials.user);
        notify('success','User created successfully!');
    }catch(error){
        notify('error', 'something went wrong :(.');
    }

    return user;
}

export const signout = (): void => {
    try{
        signOut(auth);
        notify('success','Sign out successfully!');
    }catch(error){
        notify('error', 'something went wrong :(.');
    }
}