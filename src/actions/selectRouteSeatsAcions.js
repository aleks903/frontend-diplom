import {
  FETCH_SELECT_ROUTE,
  FETCH_SEATS_REQUEST,
  FETCH_SEATS_SUCCESS,
  FETCH_SEATS_FAILURE,
} from '../types/selectRouteSeatsTypes'

export function fetchSelectRoute(itemRoute) {
  return {
    type: FETCH_SELECT_ROUTE,
    payload: { itemRoute },
  };
}

export function fetchSeatsRequest(id) {
  return {
    type: FETCH_SEATS_REQUEST,
    payload: { id },
  };
}

export function fetchSeatsSuccess(data) {
  return {
    type: FETCH_SEATS_SUCCESS,
    payload: { data },
  };
}

export function fetchSeatsFailure(error) {
  return {
    type: FETCH_SEATS_FAILURE,
    payload: { error },
  };
}
