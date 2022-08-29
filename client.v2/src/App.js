
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './layouts/Nav';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import AllocationPie from './pages/Portfolios/AllocationPie';
import AllocationView from './pages/Portfolios/AllocationView';
import PortfoliosList from './pages/Portfolios/PortfoliosList';
import PortfolioView from './pages/Portfolios/PortfolioView';
import WatchListView from './pages/watchList/WatchListView';
import Performance from './pages/Portfolios/Performance';
import { Chart, registerables  } from 'chart.js'
import 'chartjs-adapter-date-fns';
import TransactionView from 'pages/Portfolios/TransactionView';
import React, { useState } from 'react';
import PrivateRoute from "./components/PrivateRoute"
import ExplorerView from 'pages/explorer/ExplorerView';
import DividendsView from 'pages/Portfolios/DividendsView';
import StatisticsView from 'pages/Portfolios/StatisticsView';

Chart.register(...registerables)

function App() {
  const [token, setToken] = useState();

  
  return (
    <div className='w-screen h-screen overflow-auto m-0 p-0 bg-dark bg-gray-100 ' >
      <Nav/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<Register setToken={setToken} />} />
        <Route path="/portfolios" element={<PrivateRoute token={token} />} >
          <Route path="/portfolios" element={<PortfoliosList />} />
        </Route>
        <Route path="/explore" element={<ExplorerView />} />
        <Route path="/portfolios" element={<PrivateRoute token={token} />} >
          <Route path="/portfolios/:id/" element={<PortfolioView/>} >
            <Route index element={<AllocationView />} />
            <Route path="allocation" element={<AllocationView />} />
            <Route path="Preformance" element={<Performance />} />
            <Route path="Pies" element={<AllocationPie />} />
            <Route path="Orders" element={<TransactionView />} />
            <Route path="dividends" element={<DividendsView />} />
            <Route path="stats" element={<StatisticsView />} />
          </Route>
        </Route>
        <Route path="/watchLists" element={<WatchListView />} />
      </Routes>
    </div>
  );
}

export default App;
