import Comments from 'components/comments/Comments';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import HighlightedQuote from 'components/quotes/HighlightedQuote';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import useRequest from 'hooks/useRequest';
import { getQuoteById } from 'api/quotes';
import { useEffect } from 'react';

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const { data: quote, isLoading, run: getQuote } = useRequest(getQuoteById);
  const { quoteId } = params;

  useEffect(() => {
    getQuote(quoteId);
  }, [quoteId, getQuote]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!quote) {
    return (
      <div className="centered">
        <h3>No Quote Found!</h3>
      </div>
    );
  }

  return (
    <section>
      <HighlightedQuote {...quote} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments quoteId={quoteId} />
      </Route>
    </section>
  );
};

export default QuoteDetail;
