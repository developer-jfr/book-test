import { createStore, combineReducers, applyMiddleware, Action } from 'redux';
import thunkMidleware, { ThunkAction } from "redux-thunk";
import { booksReducer } from "./reducers/books-reducer";

const rootReducer = combineReducers({
  books: booksReducer,
});

type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

export type BaseThunkType<
  A extends Action = Action,
  R = Promise<void>
> = ThunkAction<R, AppStateType, unknown, A>;

export const store = createStore(rootReducer, applyMiddleware(thunkMidleware));
