import {
  FETCH_DIRECTION_CHANGE_FILTR,
  FETCH_DIRECTION_ROUTES_REQUEST,
  FETCH_DIRECTION_ROUTES_SUCCESS,

  FETCH_DIRECTION_SEARCH_REQUEST,
  FETCH_DIRECTION_SEARCH_FAILURE,
  FETCH_DIRECTION_SEARCH_SUCCESS,
  FETCH_DIRECTION_SEARCH_CLEAR,
} from '../types/directionSearchTypes';

const initialState = {
  filtr: {
    limit: 5,
    offset: 0,
    sort: 'date',
  },
  routes: {},
  loading: false,
  error: null,
};

export default function directionSearchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DIRECTION_CHANGE_FILTR:
      const { valueFiltr } = action.payload;
      return {
        ...state,
        filtr: {...state.filtr, ...valueFiltr},
      };
    case FETCH_DIRECTION_ROUTES_REQUEST:
      console.log('reducer');
      return { ...state, loading: true, error: null };
    case FETCH_DIRECTION_ROUTES_SUCCESS:
      console.log(action.payload);
      const { listRoutes } = action.payload;
      return {
        ...state,
        routes: listRoutes,
        loading: false,
        error: null,
      };

    case FETCH_DIRECTION_SEARCH_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DIRECTION_SEARCH_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error }
    case FETCH_DIRECTION_SEARCH_CLEAR:
      return { ...initialState }
    case FETCH_DIRECTION_SEARCH_SUCCESS:
      const { itemsCity } = action.payload;
      return { items: itemsCity, loading: false, error: null }
    default:
      return { ...state };
  }
}
