import {
  FETCH_SELECT_ROUTE,
  FETCH_SEATS_REQUEST,
  FETCH_SEATS_SUCCESS,
  FETCH_SEATS_FAILURE,
  FETCH_STORAGE_INIT_ORDER,
  FETCH_SELECT_CLASS_VAGON,
  FETCH_SELECT_VAGON,
} from '../types/selectRouteSeatsTypes'

const initialState = {
  route: {},
  vagons: [],
  selectedClassVagon: null,
  selectedVagon: [],
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
        selectedVagon: [],
        selectedClassVagon: null,
      };
    case FETCH_SEATS_SUCCESS:
      console.log(action.payload);
      const { data } = action.payload;
      return {
        ...state,
        vagons: data,
        loading: false,
        error: null,
      };

    case FETCH_SEATS_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case FETCH_STORAGE_INIT_ORDER:
      return { ...state, ...action.payload };
    case FETCH_SELECT_CLASS_VAGON:
      console.log(action.payload);
      const { classVagon } = action.payload;
      return {
        ...state,
        selectedClassVagon: classVagon,
        selectedVagon: [],
      };
    case FETCH_SELECT_VAGON:
      const { selectedVagon } = action.payload;
      return { ...state, selectedVagon };

    default:
      return { ...state };
  }
}
