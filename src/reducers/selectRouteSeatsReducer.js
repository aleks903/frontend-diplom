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

const initialState = {
  route: {},
  wagons: [],
  ticketCounts: {},
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
        wagons: [],
      };
    case FETCH_SEATS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        wagons: [],
        selectedWagon: [],
        selectedClassWagon: null,
      };
    case FETCH_SEATS_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        wagons: data.map((item) => {
          return {
            ...item,
            facilities: {
              activeFacilities: [],
              priceFacilities: 0,
            },
          }
        }),
        loading: false,
        error: null,
      };

    case FETCH_SEATS_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case FETCH_TICKET_COUNTS_CHANGE:
      const { ticketCounts } = action.payload;
      return { ...state, ticketCounts };
    case FETCH_STORAGE_INIT_ORDER:
      return { ...state, ...action.payload };
    case FETCH_STORAGE_INIT_WAGON:
      return { ...state, wagons: action.payload };
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
    case FETCH_CHANGE_FACILITIES:
       const { nameWagon, facilities } = action.payload;
      return {
        ...state,
        wagons: state.wagons.map((item) => {
          if (item.coach.name === nameWagon) {
            return {
              ...item,
              facilities,
            };
          }
          return item;
        }),
      };
      

    default:
      return { ...state };
  }
}
