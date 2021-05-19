import { useCallback, useState } from 'react';

const useRequest = (requestFunction) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const run = useCallback(
    async (requestData) => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await requestFunction(requestData);
        setData(data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    },
    [requestFunction]
  );

  return {
    data,
    isLoading,
    run,
    error,
  };
};

export default useRequest;
