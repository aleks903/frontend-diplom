import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
// epics
import { directionSearchEpic } from '../epics/directionSearchEpic';
// old
import { topSalesEpics } from '../epics/topSalesEpics';
import {
  fetchCatalogCategoriesEpics,
  fetchCatalogItemsEpics,
  fetchCatalogCategoriesChangeEpics,
  searchChangeEpics,
} from '../epics/catalogEpics';
import { productEpics } from '../epics/productEpics';
import { sendOrderEpics } from '../epics/sendOrderEpics';
// Reducer
import directionSearchReducer from '../reducers/directionSearchReducer';
// old
import topSalesReducer from '../reducers/topSalesReducer';
import catalogReducer from '../reducers/catalogReducer';
import productReducer from '../reducers/productReducer';
import basketProductReducer from '../reducers/basketProductReducer';
import sendOrderReducer from '../reducers/sendOrderReducer';

const reducer = combineReducers({
  serchDirection: directionSearchReducer,
  // old
  topSalesList: topSalesReducer,
  catalogList: catalogReducer,
  productItem: productReducer,
  basket: basketProductReducer,
  sendOrder: sendOrderReducer,
});

const epic = combineEpics(
  directionSearchEpic,
  // old
  topSalesEpics,
  fetchCatalogCategoriesEpics,
  fetchCatalogItemsEpics,
  fetchCatalogCategoriesChangeEpics,
  searchChangeEpics,
  productEpics,
  sendOrderEpics,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

export default store;
