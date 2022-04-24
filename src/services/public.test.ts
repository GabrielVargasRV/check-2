import "jest";
import {signout} from "./public";

test('signout runs correctly',() => {
    const res = signout();
    expect(res).toBe('success');
});