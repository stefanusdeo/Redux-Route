import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import NewQuotes from './pages/NewQuotes';
import NotFound from './pages/NotFound';
import QuotesDetail from './pages/QuotesDetail';
import QuotesList from './pages/QuotesList';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <QuotesList />
        </Route>
        <Route path='/quotes/:quotesId'>
          <QuotesDetail />
        </Route>
        <Route path='/new-quotes'>
          <NewQuotes />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
