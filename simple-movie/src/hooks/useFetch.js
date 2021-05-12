import { useState, useCallback } from 'react';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || 'GET',
        headers: requestConfig.headers || {},
        data: JSON.stringify(requestConfig.data) || undefined,
      });
      if (!response.ok) {
        throw new Error(response.error);
      }

      const data = await response.json();
      applyData(data);
    } catch (error) {
      setError(error.message || 'Requested fail!');
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    run: fetchRequest,
  };
};

export default useFetch;
