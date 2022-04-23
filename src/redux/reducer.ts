import {Action,GlobalState,Todo} from "../models";

const INITIAL_STATE = {
    user: null,
    todos: []
}

export default (state:GlobalState = INITIAL_STATE, action:Action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.content
            }
            break;

        case "ADD_TODO":
            let todos = state.todos;
            todos = [action.content,...todos];
            return{
                ...state,
                todos
            }
            break;

        case "DELETE_TODO":
            let todosFiltered = state.todos.filter((todo: Todo) => todo.id !== action.content);
            return{
                ...state,
                todos: todosFiltered
            }
            break;

        case "SET_TODOS":
            return{
                ...state,
                todos: action.content
            }
            break;

        default:
            return state;
    }
}