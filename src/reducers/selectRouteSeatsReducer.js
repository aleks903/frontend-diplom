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
  FETCH_CHANGE_PASSENGERS_SEATS,
} from '../types/selectRouteSeatsTypes'

const initialState = {
  route: {},
  wagons: [],
  ticketCounts: {},
  selectedClassWagon: null,
  selectedWagon: [],
  selectedSeats: {
    itemsSeats: [],
    passengersSeats: [],
  },
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
      return {
        ...state,
        ticketCounts,
        selectedSeats: {
          itemsSeats: [],
          passengersSeats: [],
        },
      };
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
        selectedSeats: {
          itemsSeats: [],
          passengersSeats: [],
        },
      };
    case FETCH_SELECT_WAGON:
      const { selectedWagon } = action.payload;
      return {
        ...state,
        selectedWagon,
      };
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
    case FETCH_CHANGE_PASSENGERS_SEATS:
      const { itemSeats } = action.payload;
      console.log(itemSeats);
      return {
        ...state,
        selectedSeats: {
          ...itemSeats
        }

        // wagons: state.wagons.map((item) => {
        //   if (item.coach.name === itemSeats.nameWagon) {
        //     return {
        //       ...item,
        //       seats: item.seats.map((itemSeat) => {
        //         if (itemSeat.index === Number(itemSeats.indexSeat)) {
        //           return {
        //             ...itemSeat,
        //             seatSelected: itemSeats.seatSelected,
        //           }
        //         } else {
        //           return itemSeat;
        //         }
        //       })
        //     }
        //   } else {
        //     return item;
        //   }
        // })
      }

    default:
      return { ...state };
  }
}
