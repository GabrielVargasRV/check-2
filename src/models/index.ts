
export interface User{
    username: string;
    email: string;
    photoURL: string;
    uid: string;
}

export interface Action {
    type: string;
    content: any;
}

export interface Todo{
    title: string;
    isDone: boolean;
    doneDate: number | null;
    date: number;
    theme: string;
    id: string;
    uid: string;
}

export interface GlobalState {
    user: User | null;
    todos: Todo[]
}
