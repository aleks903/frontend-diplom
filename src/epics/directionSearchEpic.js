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
  FETCH_DIRECTION_ROUTES_REQUEST,
  FETCH_DIRECTION_CHANGE_FILTR,
} from '../types/directionSearchTypes';
import {
  fetchDirectionRoutesRequest,
  fetchDirectionRoutesSuccess,
  fetchDirectionSearchFailure,
} from '../actions/directionSearchAction';

import changeFiltrStorage from '../utils/filtr-storage';

import store from '../store';

export const directionSearchEpic = (action$) => action$.pipe(
  ofType(FETCH_DIRECTION_ROUTES_REQUEST),
  map(() => {
    const queryUrl = queryString.stringify({
      ...store.getState().serchDirection.filtr
    }, {
      skipEmptyString: true
    });
    return `${queryUrl}`;
  }),
  tap((o) => console.log(o)),
  switchMap((query) => ajax.getJSON(`${process.env.REACT_APP_URL}routes?${query}`).
  pipe(
    retry(3),
    map((items) => fetchDirectionRoutesSuccess(items)),
    catchError(e => of(fetchDirectionSearchFailure(e))),
  )),
);

export const directionFiltrChangeEpic = (action$) => action$.pipe(
  ofType(FETCH_DIRECTION_CHANGE_FILTR),
  // tap(() => console.log(store.getState().serchDirection.filtr)),
  map(() => changeFiltrStorage({field: 'filter', value: store.getState().serchDirection.filtr})),
  map(() => fetchDirectionRoutesRequest()),
  // fetchDirectionRoutesRequest
);