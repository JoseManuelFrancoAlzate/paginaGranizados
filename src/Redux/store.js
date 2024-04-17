import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'; // Importa la función específica 'thunk' en lugar de intentar importarlo como un valor predeterminado
import rootReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)) // Usa la función 'thunk' aquí
);

export default store;
