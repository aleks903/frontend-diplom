import {
  FETCH_SELECT_ROUTE,
  FETCH_SEATS_REQUEST,
  FETCH_SEATS_SUCCESS,
  FETCH_SEATS_FAILURE,
  FETCH_STORAGE_INIT_ORDER
} from '../types/selectRouteSeatsTypes'

const initialState = {
  route: {},
  seats: [],
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
      return { ...state, loading: true, error: null };
    case FETCH_SEATS_SUCCESS:
      console.log(action.payload);
      const { data } = action.payload;
      return {
        ...state,
        seats: data,
        loading: false,
        error: null,
      };

    case FETCH_SEATS_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case FETCH_STORAGE_INIT_ORDER:
      return { ...state, ...action.payload };
      
    default:
      return { ...state };
  }
}
