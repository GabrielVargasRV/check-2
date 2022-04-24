import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Home from "../Home";
import { Provider } from "react-redux";
import store from "../../redux/store";

test('Home renders correctly', () => {
    const component = render(
        <Provider store={store} >
            <Home/>
        </Provider>
    );
    expect(component).toBeTruthy();
});