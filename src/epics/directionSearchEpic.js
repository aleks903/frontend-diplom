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


const testDepArriv = {
  total_count: 1,
  items: [
    {
      have_first_class: false,
      have_second_class: false,
      have_third_class: false,
      have_fourth_class: false,
      have_wifi: false,
      have_air_conditioning: false,
      is_express: false,
      min_price: 3900,
      available_seats: 65,
      available_seats_info: {
        first: 18,
        third: 48
      },
      departure: {
        _id: "5b9a320ef83e028786ea6583",
        have_first_class: true,
        have_second_class: false,
        have_third_class: true,
        have_fourth_class: false,
        have_wifi: true,
        have_air_conditioning: false,
        is_express: false,
        min_price: 3900,
        duration: 355500,
        available_seats: 65,
        available_seats_info: {
          first: 18,
          third: 48
        },
        train: {
          _id: "5b9a3077f83e028786ea5fa7",
          name: "Тройка - 2"
        },
        from: {
          railway_station_name: "Киевский",
          city: {
            _id: "5b9a2fa7f83e028786ea5672",
            name: "москва"
          },
          datetime: 1536923395
        },
        to: {
          railway_station_name: "Ладожский",
          city: {
            _id: "5b9a2fa7f83e028786ea5673",
            name: "санкт-петербург"
          },
          datetime: 1537278895
        },
        price_info: {
          first: {
            price: 4330,
            top_price: 3900,
            bottom_price: 4050
          },
          third: {
            top_price: 4310,
            bottom_price: 4755,
            side_price: 4415
          }
        }
      },
      arrival: {
        _id: "5b9a320ef83e028786ea6583",
        have_first_class: true,
        have_second_class: false,
        have_third_class: true,
        have_fourth_class: false,
        have_wifi: true,
        have_air_conditioning: false,
        is_express: false,
        min_price: 3900,
        duration: 355500,
        available_seats: 65,
        available_seats_info: {
          first: 18,
          third: 48
        },
        train: {
          _id: "5b9a3077f83e028786ea5fa7",
          name: "Тройка - 2"
        },
        from: {
          railway_station_name: "Киевский",
          city: {
            _id: "5b9a2fa7f83e028786ea5672",
            name: "москва"
          },
          datetime: 1536923395
        },
        to: {
          railway_station_name: "Ладожский",
          city: {
            _id: "5b9a2fa7f83e028786ea5673",
            name: "санкт-петербург"
          },
          datetime: 1537278895
        },
        price_info: {
          first: {
            price: 4330,
            top_price: 3900,
            bottom_price: 4050
          },
          third: {
            top_price: 4310,
            bottom_price: 4755,
            side_price: 4415
          }
        }
      }
    },
  ]
}

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
    // map(() => fetchDirectionRoutesSuccess(testDepArriv)),
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