import { Redirect, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from 'components/layout/Layout';
import AllQuote from './pages/AllQuotes';
import LoadingSpinner from 'components/UI/LoadingSpinner';

const QuoteDetail = lazy(() => import('./pages/QuoteDetail'));
const NewQuote = lazy(() => import('./pages/NewQuote'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
