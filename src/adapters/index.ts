import {User,Todo} from "../models"
import userAvatar from "../assets/user_avatar.png";

export const userAdapter = (res: any):User => {
    let user:User = {
        username: '',
        email: '',
        photoURL: userAvatar,
        uid: '',
    };

    if(res.email) user.email = res.email;
    if(res.displayName) user.username = res.displayName;
    if(res.photoURL) user.photoURL = res.photoURL;
    if(res.uid) user.uid = res.uid;

    return user;
}

export const todoAdapter = (res:any):Todo => {
    let todo:Todo = {
        title:'',
        isDone: false,
        doneDate: null,
        date: 0,
        theme: '',
        id: '',
        uid: ''
    }

    if(res.title) todo.title = res.title;
    if(res.isDone) todo.isDone = res.isDone;
    if(res.doneDate) todo.doneDate = res.doneDate;
    if(res.date) todo.date = res.date;
    if(res.theme) todo.theme = res.theme;
    if(res.id) todo.id = res.id;
    if(res.uid) todo.uid = res.uid;

    return todo;
}