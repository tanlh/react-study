import useRequest from 'hooks/useRequest';
import { getAllQuotes } from 'api/quotes';

import NoQuotesFound from 'components/quotes/NoQuotesFound';
import QuoteList from 'components/quotes/QuoteList';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import { useEffect } from 'react';

const AllQuotes = () => {
  const { data: quotes, isLoading, run: loadQuotes } = useRequest(getAllQuotes);

  useEffect(() => {
    loadQuotes();
  }, [loadQuotes]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (quotes.length === 0) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={quotes} />;
};

export default AllQuotes;
