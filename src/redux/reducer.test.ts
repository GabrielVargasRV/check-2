import "jest";
import reducer from "./reducer";

test('Reducer ADD_TODO runs correctly', () => {
    const state = {
        user: null,
        todos: []
    };
    const newTodo = {
        title:'test-title',
        isDone: false,
        doneDate: null,
        date: Date.now(),
        theme: 'dark',
        id:'test-id',
        uid:'test-uid'
    };
    let newState = reducer(state,{type: "ADD_TODO",content: newTodo});
    expect(newState.todos.length).toBe(1);
    newState = reducer(newState,{type: "ADD_TODO",content: newTodo});
    expect(newState.todos.length).toBe(2);
});

test('Reducer SET_USER runs correctly', () => {
    const state = {
        user: null,
        todos: []
    };
    const user = {
        username: 'test username',
        email: 'testemail@gmail.com',
        photoURL: 'testurl',
        uid:'test-uid'
    };
    expect(state.user).toBeFalsy();
    let newState = reducer(state,{type: "SET_USER",content: user});
    expect(newState.user).toBeTruthy();
});

test('Reducer DELETE_TODO runs correctly', () => {
    const state = {
        user: null,
        todos: [{
            title:'test-title',
            isDone: false,
            doneDate: null,
            date: Date.now(),
            theme: 'dark',
            id:'test-id',
            uid:'test-uid'
        }]
    };
    let newState = reducer(state,{type:'DELETE_TODO',content:'test-id'});
    expect(newState.todos.length).toBe(0);
});

test('Reducer SET_TODOS runs correctly', () => {
    const state = {
        user: null,
        todos: []
    };
    const todos = [
        {
            title:'test-title',
            isDone: false,
            doneDate: null,
            date: Date.now(),
            theme: 'dark',
            id:'test-id-2',
            uid:'test-uid'
        },
        {
            title:'test-title',
            isDone: false,
            doneDate: null,
            date: Date.now(),
            theme: 'dark',
            id:'test-id-1',
            uid:'test-uid'
        }
    ]
    expect(state.todos.length).toBe(0);
    let newState = reducer(state,{type:'SET_TODOS',content:todos});
    expect(newState.todos.length).toBeGreaterThan(1);
});