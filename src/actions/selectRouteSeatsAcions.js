import {
  FETCH_SELECT_ROUTE,
  FETCH_SEATS_REQUEST,
  FETCH_SEATS_SUCCESS,
  FETCH_SEATS_FAILURE,
  FETCH_STORAGE_INIT_ORDER,
  FETCH_SELECT_CLASS_VAGON,
  FETCH_SELECT_VAGON,
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

export function fetchStorageInitOrder(storageData) {
  return {
    type: FETCH_STORAGE_INIT_ORDER,
    payload: storageData,
  };
}

export function fetchSelectClassVagon(classVagon) {
  return {
    type: FETCH_SELECT_CLASS_VAGON,
    payload: classVagon,
  };
}

export function fetchSelectVagon(selectedVagon) {
  return {
    type: FETCH_SELECT_VAGON,
    payload: selectedVagon,
  };
}