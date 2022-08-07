export const initialStateFetch = {
  data: null,
  loading: false,
  error: null,
  url: null,
  method: null,
  body: null,
};

export const fetchReducer = (state = initialStateFetch, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      if (action.payload !== null) {
        return {
          ...state,
          loading: true,
          url: action.payload,
          method: action.method,
          body: action.body,
        };
      } else {
        return state;
      }

    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }

};
