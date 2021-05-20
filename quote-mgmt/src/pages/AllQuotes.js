import useRequest from 'hooks/useRequest';
import { getAllQuotes } from 'api/quotes';

import NoQuotesFound from 'components/quotes/NoQuotesFound';
import QuoteList from 'components/quotes/QuoteList';
import LoadingSpinner from 'components/UI/LoadingSpinner';

const AllQuotes = () => {
  const { data: quotes, isLoading, isSuccess } = useRequest(getAllQuotes);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isSuccess && quotes.length === 0) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={quotes} />;
};

export default AllQuotes;
