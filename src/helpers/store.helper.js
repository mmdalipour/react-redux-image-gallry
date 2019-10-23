import { createStore, applyMiddleware, compose } from 'redux';

// middlewares
import createSagaMiddleware from 'redux-saga';

// sagas
import rootSaga from '../sagas';

// reducers
import rootReducer from '../reducers';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    sagaMiddleware.run(rootSaga);

    return store;
}

export default configureStore;