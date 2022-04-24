import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import TodoList from "../TodoList";
import {Provider} from "react-redux";
import store from "../../redux/store";

test('Todo list renders correctly', () => {
    const component  = render(
        <Provider store={store} >
            <TodoList />
        </Provider>
    );

    expect(component.container).toHaveTextContent('To Do List');
});