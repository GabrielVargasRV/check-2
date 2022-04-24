import {db} from "../firebase";
import {Todo} from "../models/index";
import {collection,query,where,getDocs,setDoc,doc,updateDoc,deleteDoc,orderBy} from "firebase/firestore";
import { todoAdapter } from "../adapters/index";
import { v4 as uuidv4 } from 'uuid';
import store from "../redux/store";
import notify from "../utils/notify";



export const getTodos = async (uid: string): Promise<Todo[]> => {
    const todos:Todo[] = [];
    const q = query(collection(db, "todos"), where("uid", "==", uid),orderBy("date","desc"));
    const querySnapshot = await getDocs(q);
    
    querySnapshot.docs.forEach((e) => {
        const adaptedTodo = todoAdapter({id:e.id,...e.data()})
        todos.push(adaptedTodo);
    });

    store.dispatch({type:"SET_TODOS",content: todos});
    return todos;
}

export const addTodo = async (todo:Todo): Promise<string> => {
    let res = 'undefined';
    try{
        await setDoc(doc(db, "todos", todo.id), todo);
        notify('success','Task added successfully!');
        res = 'success';
    }catch(error){
        notify('error','Something went wrong :(.');
        res = 'error';
    }
    return res;
}

export const create = async (title: string, theme: string): Promise<string> => {
    let res = 'undefined';
    if(title.length > 0){
        const uid = store.getState().user!.uid;
        const id = uuidv4();
        const now = Date.now();
        const newTodo: Todo = {title,theme,uid,id,isDone:false,date: now,doneDate:null};
        store.dispatch({type:'ADD_TODO',content: newTodo});
        await addTodo(newTodo);
        res = 'success';
        return res;
    }

    notify('warning','Add a title');
    res = 'error';
    return res;
}

export const update = async (title:string,theme:string,isDone: boolean,id:string) => {
    let res = 'undefined';
    try{
        const todos = store.getState().todos;
        todos.map((todo:Todo) => {
            if(todo.id !== id) return todo;
            todo.title = title;
            todo.theme = theme;
            todo.isDone = isDone;
            return todo;
        });
        store.dispatch({type: "SET_TODOS",content:todos});
        await updateDoc(doc(db,"todos",id),{title,theme,isDone});
        notify('success','Updated successfully!');
        res = 'success';
    }catch(error){
        notify('error','Something went wrong :(');
        res = 'error';
    }

    return res;
}

export const deleteTodo = async (id: string) => {
    let res = 'undefined';
    try{
        await deleteDoc(doc(db, "todos", id));
        store.dispatch({type:'DELETE_TODO',content: id});
        notify('success','Deleted successfully!');
        res = 'success';
    }catch(error){
        notify('error','Something went wrong :(');
        res = 'error';
    }

    return res;
}