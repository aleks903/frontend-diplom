import {
  FETCH_SELECT_ROUTE,
  FETCH_SEATS_REQUEST,
  FETCH_SEATS_SUCCESS,
  FETCH_SEATS_FAILURE,
  FETCH_TICKET_COUNTS_CHANGE,
  FETCH_STORAGE_INIT_ORDER,
  FETCH_STORAGE_INIT_WAGON,
  FETCH_SELECT_CLASS_WAGON,
  FETCH_SELECT_WAGON,
  FETCH_CHANGE_FACILITIES,
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

export function fetchTicketCountsChange(ticketCount) {
  return {
    type: FETCH_TICKET_COUNTS_CHANGE,
    payload: ticketCount,
  };
}

export function fetchStorageInitOrder(storageData) {
  return {
    type: FETCH_STORAGE_INIT_ORDER,
    payload: storageData,
  };
}

export function fetchStorageInitWagon(storageDataWagon) {
  return {
    type: FETCH_STORAGE_INIT_WAGON,
    payload: storageDataWagon,
  };
}

export function fetchSelectClassWagon(classWagon) {
  return {
    type: FETCH_SELECT_CLASS_WAGON,
    payload: classWagon,
  };
}

export function fetchSelectWagon(selectedWagon) {
  return {
    type: FETCH_SELECT_WAGON,
    payload: selectedWagon,
  };
}

export function fetchChangeFacilities(itemWagonFacilities) {
  return {
    type: FETCH_CHANGE_FACILITIES,
    payload: itemWagonFacilities,
  };
}
