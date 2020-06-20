import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
// epics
import { directionSearchEpic, directionFiltrChangeEpic } from '../epics/directionSearchEpic';
import { selectRouteSeatsEpic } from '../epics/selectRouteSeatsEpic';
// Reducer
import directionSearchReducer from '../reducers/directionSearchReducer';
import selectRouteSeatsReducer from '../reducers/selectRouteSeatsReducer';

const reducer = combineReducers({
  serchDirection: directionSearchReducer,
  selectRouteSeats: selectRouteSeatsReducer,
});

const epic = combineEpics(
  directionSearchEpic,
  directionFiltrChangeEpic,
  selectRouteSeatsEpic,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

export default store;
