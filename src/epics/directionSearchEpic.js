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
import { FETCH_DIRECTION_SEARCH_REQUEST } from '../types/directionSearchTypes';
import {
  fetchDirectionSearchSuccess, fetchDirectionSearchFailure,
} from '../actions/directionSearchAction';

export const directionSearchEpic = (action$) => action$.pipe(
  ofType(FETCH_DIRECTION_SEARCH_REQUEST),
  map((o) => o.payload.valueSerch.trim()),
  // filter(o => o !== ''),
  debounceTime(500),
  map((o) => new URLSearchParams({ name: o})),
  switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_URL}routes/cities?${o}`).
  pipe(
    retry(3),
    // tap(o => console.log(o)),
    map((items) => fetchDirectionSearchSuccess(items)),
    catchError(e => of(fetchDirectionSearchFailure(e))),
  )),
);
