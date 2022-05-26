import { Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

import Comments from '../components/comments/Comments';
import HighlightedQuotes from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTEST = [
  { id: 'p1', author: 'Deo', text: 'Tetaplah hidup walau tak berguna' },
  { id: 'p2', author: 'Deo', text: 'Cintailah ibumu karena ibumu bukan ibuku' },
];

export default function QuotesDetail() {
  const params = useParams();

  const quotes = DUMMY_QUOTEST.find((data) => data.id === params.quotesId);

  if (!quotes) {
    return <p>Quotes Not Found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuotes text={quotes.text} author={quotes.author} />
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}
