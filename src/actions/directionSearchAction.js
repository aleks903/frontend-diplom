import {
  FETCH_DIRECTION_CHANGE_FILTR,
  FETCH_DIRECTION_ROUTES_REQUEST,
  FETCH_DIRECTION_ROUTES_SUCCESS,
  FETCH_DIRECTION_SEARCH_REQUEST,
  FETCH_DIRECTION_SEARCH_FAILURE,
  FETCH_DIRECTION_SEARCH_SUCCESS,
  FETCH_DIRECTION_SEARCH_CLEAR,
} from '../types/directionSearchTypes';

export function fetchDirectionChangeFiltr(valueFiltr) {
  console.log('reg');
  return {
    type: FETCH_DIRECTION_CHANGE_FILTR,
    payload: { valueFiltr },
  };
}

export function fetchDirectionRoutesRequest() {
  return { 
    type: FETCH_DIRECTION_ROUTES_REQUEST,
  };
}

export function fetchDirectionRoutesSuccess(listRoutes) {
  return {
    type: FETCH_DIRECTION_ROUTES_SUCCESS,
    payload: { listRoutes },
  };
}


export function fetchDirectionSearchRequest(valueSerch) {
  return { 
    type: FETCH_DIRECTION_SEARCH_REQUEST,
    payload: { valueSerch },
  };
}

export function fetchDirectionSearchSuccess(itemsCity) {
  return {
    type: FETCH_DIRECTION_SEARCH_SUCCESS,
    payload: { itemsCity },
  };
}

export function fetchDirectionSearchFailure(error) {
  return {
    type: FETCH_DIRECTION_SEARCH_FAILURE,
    payload: { error },
  };
}

export function fetchDirectionSearchClear() {
  return {
    type: FETCH_DIRECTION_SEARCH_CLEAR
  };
}
