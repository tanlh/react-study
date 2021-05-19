import { addQuote } from 'api/quotes';

import QuoteForm from 'components/quotes/QuoteForm';
import useRequest from 'hooks/useRequest';
import { useHistory } from 'react-router';

const NewQuote = () => {
  const history = useHistory();
  const { run: submitQuote } = useRequest(addQuote);

  const addQuoteHandler = (quoteData) => {
    submitQuote(quoteData).then((response) => history.replace('/quotes'));
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
