import '@testing-library/jest-dom/extend-expect';
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../redux/store";
import Header from "../Header";

test('Header renders content',() => {
    const component = render(
        <Provider store={store} >
            <Header/>
        </Provider>
    );
    // console.log(component.container);
    expect(component).toBeTruthy();
})