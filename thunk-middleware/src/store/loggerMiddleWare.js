export const loggerMiddleWare = (store) => (next) => (action) => {
    console.log('dispatching', action);
    console.log('Before', store.getState());

    const result = next(action);

    console.log('After', store.getState());

    return result;
};