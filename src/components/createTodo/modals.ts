import {Todo} from "../../models/index";

export interface Props{
    id: string | null;
    close: () => void;
    todos: Todo[];
}