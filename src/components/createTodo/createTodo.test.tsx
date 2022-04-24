import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CreateTodo from "../createTodo";

test('Update Todo renders correctly', () => {
    const props = {
        id: 'test-id',
        close: () => {},
        todos: [{title:'todo 1',date: 0,isDone:false,doneDate:null,uid:'test-uid',id:'test-id',theme: 'dark'}]
    }
    const component = render(<CreateTodo {...props}  />);

    // component.debug();
    component.getByPlaceholderText('Title');
    expect(component.container).toHaveTextContent('Update task');
    expect(component.container).toHaveTextContent('Update');
})

test('Create Todo renders correctly', () => {
    const props = {
        id: null,
        close: () => {},
        todos: [{title:'todo 1',date: 0,isDone:false,doneDate:null,uid:'test-uid',id:'test-id',theme: 'dark'}]
    }
    const component = render(<CreateTodo {...props}  />);

    // component.debug();
    component.getByPlaceholderText('Title');
    expect(component.container).toHaveTextContent('Create task');
    expect(component.container).toHaveTextContent('Create');
})