import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Login from "../Login";
import { Provider } from "react-redux";
import store from "../../redux/store";

test('Login renders correctly', () => {
    const component = render(
        <Provider store={store} >
            <Login/>
        </Provider>
    );
    expect(component).toBeTruthy();
});