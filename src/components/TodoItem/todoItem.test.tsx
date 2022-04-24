import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import TodoItem from "../TodoItem";

test('Todo item renders correctly', () => {
    const item = {
        title:'test-title',
        isDone: false,
        doneDate: null,
        date: Date.now(),
        theme: 'dark',
        id:'test-id',
        uid:'test-uid'
    };
    const component = render(<TodoItem item={item} edit={() => {}} />);

    expect(component.container).toHaveTextContent(item.title);
});