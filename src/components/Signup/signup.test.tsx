import "@testing-library/jest-dom/extend-expect";
import {useState} from "react";
import { render } from "@testing-library/react";
import Signup from "../Signup";

const Testcomp = () => {
    const [onLogin,setOnLogin] = useState(false);

    return <Signup setOnLogin={setOnLogin} />
}

test('Signup renders correctly', () => {
    const component = render(<Testcomp/>);

    expect(component.container).toHaveTextContent("Sign up");
    component.getByPlaceholderText("Name");
    component.getByPlaceholderText("Email");
    component.getByPlaceholderText("Password");
    expect(component.container).toHaveTextContent("You already have an account ?");
})