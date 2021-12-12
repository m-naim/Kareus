from pandas import DataFrame
import pandas as pd
import numpy as np
from datetime import datetime

from pandas.core.indexes.base import Index
from config import db

transactions = db.portfolios.find_one({'name': 'current'})['transactions']
transactions = DataFrame(transactions)
stocks = list(set(transactions['symbol']))
transactions = transactions.sort_values(by='date')
date_min = transactions['date'].iloc[0]
date_max = datetime.now()

dates = pd.date_range(date_min, date_max).tolist()
portfolio = pd.DataFrame(0, index=np.arange(len(dates)), columns=stocks)
stocks_weight = pd.DataFrame(0, index=np.arange(len(dates)), columns=stocks)
portfolio_returns = pd.DataFrame(0, index=np.arange(len(dates)), columns=stocks)
portfolio['date'] = dates
stocks_weight['date'] = dates
initial_cash = 460
for idx, d in transactions.iterrows():
        stocks_weight.loc[portfolio['date'] >= d['date'],
                          d['symbol']] = d['price']/initial_cash
        portfolio.loc[portfolio['date'] >= d['date'], d['symbol']
                      ] = portfolio.loc[portfolio['date'] == d['date']].iloc[0][d['symbol']] + d['qty']

result = pd.DataFrame(0, index=np.arange(len(dates)), columns=stocks)
result['date'] = portfolio['date']
portfolio_returns['date'] = portfolio['date']
result = result.set_index('date')
stocks_weight = stocks_weight.set_index('date')
portfolio = portfolio.set_index('date')
portfolio_returns = portfolio_returns.set_index('date')

for s in stocks:
        history=db.histories.find_one({'symbol': s})['history']
        history= pd.DataFrame(history).set_index('Date')
        stocks_returns = history['Close']
        stocks_returns = stocks_returns.pct_change()
        portfolio_returns[s] = stocks_returns
        float_portfolio = portfolio[s].astype('float64')
        result[s] = stocks_returns*float_portfolio * stocks_weight[s]

stocks_weight = stocks_weight*100
perf = DataFrame()
perf['sum'] = result.sum(axis=1)
perf['cum'] = (1 + perf['sum']).cumprod()
perf = perf.reset_index()
res = perf.to_dict('list')
print(res)
