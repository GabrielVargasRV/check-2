import {Todo} from "../../models/index";

export interface Props{
    item: Todo;
    edit: React.Dispatch<React.SetStateAction<string | null>>
}