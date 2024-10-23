import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { drawerReducer } from "./reducers/Drawer";
import { productReducer } from "./reducers/Products";
import { productsDetailReducer } from "./reducers/ProductDetails";
import { cardReducer } from "./reducers/Card";
import { searchReducer } from "./reducers/Search";

const cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];
let initialState = {
  card: { cardItems },
};

const reducers = combineReducers({
  drawer: drawerReducer,
  products: productReducer,
  product: productsDetailReducer,
  card: cardReducer,
  search: searchReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
