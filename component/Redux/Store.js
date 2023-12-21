import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import createSagaMiddleware from "redux-saga";
import SagaData from "./Saga";

const SagaMiddleware = createSagaMiddleware();


const Store = configureStore({
  reducer:RootReducer,
  middleware:()=> [SagaMiddleware]
 
});

SagaMiddleware.run(SagaData);


export default Store;
