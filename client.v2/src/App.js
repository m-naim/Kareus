
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './layouts/Nav';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import AllocationPie from './pages/Portfolios/AllocationPie';
import AllocationView from './pages/Portfolios/AllocationView';
import PortfoliosList from './pages/Portfolios/PortfoliosList';
import PortfolioView from './pages/Portfolios/PortfolioView';
import WatchListView from './pages/watchList/WatchListView';
import Performance from './pages/Portfolios/Performance';
import { Chart, registerables  } from 'chart.js'
import 'chartjs-adapter-date-fns';
import TransactionView from 'pages/Portfolios/TransactionView';

Chart.register(...registerables)

function App() {
  return (
    <div className='w-full min-h-screen overflow-hidden m-0 p-0 bg-dark' >
      <Nav/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolios" element={<PortfoliosList />} />
        <Route path="/explore" element={<PortfoliosList />} />
        <Route path="/portfolios/:name/" element={<PortfolioView/>} >
          <Route index element={<AllocationView />} />
          <Route path="allocation" element={<AllocationView />} />
          <Route path="Preformance" element={<Performance />} />
          <Route path="Pies" element={<AllocationPie />} />
          <Route path="Orders" element={<TransactionView />} />
        </Route>
        <Route path="/watchLists" element={<WatchListView />} />
      </Routes>
    </div>
  );
}

export default App;
