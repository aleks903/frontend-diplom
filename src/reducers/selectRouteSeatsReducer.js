import {
  FETCH_SELECT_ROUTE,
  FETCH_SEATS_REQUEST,
  FETCH_SEATS_SUCCESS,
  FETCH_SEATS_FAILURE,
  FETCH_STORAGE_INIT_ORDER,
  FETCH_SELECT_CLASS_WAGON,
  FETCH_SELECT_WAGON,
} from '../types/selectRouteSeatsTypes'

const initialState = {
  route: {},
  wagons: [],
  selectedClassWagon: null,
  selectedWagon: [],
  loading: false,
  error: null,
};

export default function selectRouteSeatsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SELECT_ROUTE:
      const { itemRoute } = action.payload;
      return {
        ...state,
        route: itemRoute,
      };
    case FETCH_SEATS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        selectedWagon: [],
        selectedClassWagon: null,
      };
    case FETCH_SEATS_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        wagons: data,
        loading: false,
        error: null,
      };

    case FETCH_SEATS_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case FETCH_STORAGE_INIT_ORDER:
      return { ...state, ...action.payload };
    case FETCH_SELECT_CLASS_WAGON:
      const { classWagon } = action.payload;
      return {
        ...state,
        selectedClassWagon: classWagon,
        selectedWagon: [],
      };
    case FETCH_SELECT_WAGON:
      const { selectedWagon } = action.payload;
      return { ...state, selectedWagon };

    default:
      return { ...state };
  }
}
