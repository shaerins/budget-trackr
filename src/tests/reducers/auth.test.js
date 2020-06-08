import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
    const action = {
        type: "LOGIN",
        uid: "1234abc"
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test("should clear uid for logout", () => {
    const action = {
        type: "LOGOUT"
    };
    const state = authReducer({ uid: "1234abc" }, action);
    expect(state).toEqual({});
});
