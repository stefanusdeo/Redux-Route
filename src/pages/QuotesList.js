import QuoteItem from '../components/quotes/QuoteList';

const DUMMY_QUOTEST = [
  { id: 'p1', author: 'Deo', text: 'Tetaplah hidup walau tak berguna' },
  { id: 'p2', author: 'Deo', text: 'Cintailah ibumu karena ibumu bukan ibuku' },
];

export default function QuotesList() {
  return <QuoteItem quotes={DUMMY_QUOTEST} />;
}
