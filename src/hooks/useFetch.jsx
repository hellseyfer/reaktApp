import { useEffect, useReducer } from 'react';
import { fetchReducer, initialStateFetch } from '../reducer/fetchReducer';

const useFetch = () => {
  const [state, dispatch] = useReducer(fetchReducer, initialStateFetch);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (
          state.url !== null &&
          state.method !== null &&
          state.body !== null
        ) {
          const response = await fetch(state.url, {
            method: state.method,
            headers: {
              'Content-Type': 'application/json',
            },
            body: state.body,
          });
          const data = await response.json();
          const info = data;
          dispatch({ type: 'SET_DATA', payload: info });
        }
      } catch (error) {
        dispatch({ type: 'ERROR', payload: error });
      }
    };

    fetchData();
  }, [state.url, state.method, state.body]);

  return { state, dispatch };
};

export default useFetch;
