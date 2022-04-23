import {Dispatch,SetStateAction} from 'react';

export interface Props{
    setOnLogin: Dispatch<SetStateAction<boolean>>;
}

export interface FormData{
    name: string;
    email: string;
    password: string;
}