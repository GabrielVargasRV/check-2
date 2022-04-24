import "@testing-library/jest-dom/extend-expect";
import {useState} from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Login from "../Login";

const TestComp = () => {
    const [onLogin,setOnLogin] = useState(false)
    return <Login setOnLogin={setOnLogin} />
}

test('Login renders correctly with user',() => {
    let user = {username:'test-username',email:'test-email',photoURL:'test-photo',uid:'test-uid'}
    store.dispatch({type:'SET_USER',content: user});

    const component = render(
        <Provider store={store} >
            <TestComp/>
        </Provider>
    );

    expect(component.container).toHaveTextContent(`Continue as ${user.username}`);
    expect(component.container).toHaveTextContent('Switch Account');

})

test('Login renders conrrecty without user', () => {
    let user = null;
    store.dispatch({type:'SET_USER',content: user});

    const component = render(
        <Provider store={store} >
            <TestComp/>
        </Provider>
    );
    
    expect(component.container).toHaveTextContent('Sign In');
    expect(component.container).toHaveTextContent('Sign in with Google');
    expect(component.container).toHaveTextContent(`Don't have an account ?`)
    component.getByPlaceholderText('Email');
    component.getByPlaceholderText('Password');
})