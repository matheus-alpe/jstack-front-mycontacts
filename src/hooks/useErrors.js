import { useState, useCallback } from 'react';

export default function useErrors(ERRORS = []) {
  const [errors, setErros] = useState(ERRORS);

  const setError = useCallback(
    ({ field, message }) => {
      if (errors.find((error) => error.field === field)) return;

      setErros((prevState) => [...prevState, { field, message }]);
    },
    [errors]
  );

  const removeError = useCallback((field) => {
    setErros((prevState) => prevState.filter((error) => error.field !== field));
  }, []);

  const getErrorMessageByField = useCallback(
    (field) => errors.find((error) => error.field === field)?.message,
    [errors]
  );

  return {
    setError,
    removeError,
    getErrorMessageByField
  };
}
