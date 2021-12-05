import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import HidableContainer from '../../../components/HidableContainer';

const urlQuotes = 'https://gist.githubusercontent.com/'
                + 'camperbot/5a022b72e96c4c9585c32bf6a75f62d9/'
                + 'raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const quotes = [{
  quote: '',
  author: '',
}];

export async function http(
  request: RequestInfo,
): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

function getRondomBetween(lower: number, upper: number) {
  if (lower === upper) return lower;
  return Math.floor((Math.random() * upper) + lower);
}

const QuoteBox = () => {
  const [state, setState] = useState(quotes);

  useEffect(() => {
    const getQuotes = async function () {
      const result = await http(urlQuotes);
      setState(result.quotes);
    };
    getQuotes();
  }, []);

  const date = getRondomBetween(0, state.length);
  return state.length > 1 ? (
    <HidableContainer className="container MuiPaper-root MuiPaper-elevation1" storageKey="displayQuoteBox">
      <blockquote className="blockquote">
        <Typography variant="h6" gutterBottom>
          {state[date].quote }
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {state[date].author }
        </Typography>

      </blockquote>
    </HidableContainer>
  ) : <> </>;
};

export default QuoteBox;
