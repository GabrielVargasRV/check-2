import "jest";
import store from "../redux/store";
import {create,getTodos} from "./todos";

test('Create task runs correctly', () => {
    let user = {
        username: 'test username',
        email: 'testemail@gmail.com',
        photoURL: 'testurl',
        uid:'test-uid'
    }
    store.dispatch({type:'SET_USER',content: user});
    create('test-title','dark').then((res) => {
        expect(res).toBe('success');
    });
});

test('Get todos runs correctly', () => {
    getTodos('test-uid').then((res) => {
        expect(res.length).toBeGreaterThanOrEqual(0);
    });
});