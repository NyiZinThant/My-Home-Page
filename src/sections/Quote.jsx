import { useEffect, useState } from 'react';
import { fetchQuote } from '../libs/fetcher';

export default function Quote() {
  const [quote, setQuote] = useState();
  useEffect(() => {
    (async () => {
      const newQuote = await fetchQuote();
      setQuote(newQuote);
    })();
  }, []);
  return (
    <>
      {!quote ? (
        <div className="w-1/3 flex justify-center items-center gap-2">
          <span className="sr-only">Loading...</span>
          <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
        </div>
      ) : (
        <div className="w-1/3 text-white text-center">
          <p>
            <q>{quote.content}</q>
          </p>
          <p>
            <b>- {quote.author} -</b>
          </p>
        </div>
      )}
    </>
  );
}
