import { useEffect, useState } from 'react';
import { fetchQuote } from '../libs/fetcher';

export default function Quote() {
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!isLoading) {
      return;
    } else {
      (async () => {
        const newQuote = await fetchQuote();
        setQuote(newQuote);
        setIsLoading(false);
        console.log('hello');
      })();
    }
  }, []);

  //   const quote = fetchQuote();
  return (
    <>
      {isLoading ? (
        <div className="w-1/3 flex justify-center items-center gap-2">
          <span className="sr-only">Loading...</span>
          <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
        </div>
      ) : (
        <div className="w-1/3 text-white text-center">
          <p>{quote.content}</p>
          <p>- {quote.author} -</p>
        </div>
      )}
    </>
  );
}
