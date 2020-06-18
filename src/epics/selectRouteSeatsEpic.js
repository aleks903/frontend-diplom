import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  map,
  tap,
  retry,
  filter,
  debounceTime,
  switchMap,
  catchError,
} from 'rxjs/operators';
import queryString from 'query-string';
import {
  FETCH_SEATS_REQUEST,
} from '../types/selectRouteSeatsTypes';
import {
  fetchSeatsSuccess,
} from '../actions/selectRouteSeatsAcions';

// import changeFiltrStorage from '../utils/filtr-storage';

import store from '../store';

export const selectRouteSeatsEpic = (action$) => action$.pipe(
  ofType(FETCH_SEATS_REQUEST),
  map((o) => o.payload.id),
  map((id) => {
    const {
      // have_first_class,
      // have_second_class,
      // have_third_class,
      // have_fourth_class,
      have_wifi,
      have_air_conditioning,
      have_express,
    } = store.getState().serchDirection.filtr;
    const queryUrl = queryString.stringify({
      id,
      // have_first_class,
      // have_second_class,
      // have_third_class,
      // have_fourth_class,
      have_wifi,
      have_air_conditioning,
      have_express,
    }, {
      skipEmptyString: true
    });
    return {id, queryUrl};
  }),
  tap((o) => console.log(o.id)),
  switchMap((item) => ajax.getJSON(`${process.env.REACT_APP_URL}routes/${item.id}/seats?${item.queryUrl}`).
  pipe(
    retry(3),
    map((items) => fetchSeatsSuccess(items)),
    catchError(e => of(fetchSeatsFailure(e))),
  )),
);

// export const directionFiltrChangeEpic = (action$) => action$.pipe(
//   ofType(FETCH_DIRECTION_CHANGE_FILTR),
//   // tap(() => console.log(store.getState().serchDirection.filtr)),
// map(() => changeFiltrStorage({field: 'filter', value: store.getState().serchDirection.filtr})),
//   map(() => fetchDirectionRoutesRequest()),
//   // fetchDirectionRoutesRequest
// );

