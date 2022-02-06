import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/index.css';
import './assets/css/smallScreen.css';
import './assets/css/largeScreen.css';
import './assets/css/mediumScreen.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes/routes';
import { Chart, ArcElement, Legend,Title,Tooltip,CategoryScale,registerables  } from 'chart.js'

Chart.register(...registerables)
ReactDOM.render(Routes, document.getElementById('root'));

serviceWorker.unregister();
