import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

export default function NewQuotes() {
  const history = useHistory()

  const handleData=(data)=>{
    console.log(data);

    history.push('/quotes')
  }

  return (
    <QuoteForm onAddQuote={handleData}/>
  );
}
