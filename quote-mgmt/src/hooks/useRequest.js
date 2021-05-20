import { useCallback, useEffect, useState } from 'react';

const useRequest = (requestFunction, config = { manual: false }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { manual } = config;

  const run = useCallback(
    async (requestData) => {
      setIsLoading(true);
      setIsSuccess(false);
      setError(null);

      try {
        const data = await requestFunction(requestData);
        setData(data);
        setIsSuccess(true);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    },
    [requestFunction]
  );

  useEffect(() => {
    if (manual) {
      return;
    }

    run();
  }, [manual, run]);

  return {
    data,
    isLoading,
    run,
    error,
    isSuccess,
  };
};

export default useRequest;
