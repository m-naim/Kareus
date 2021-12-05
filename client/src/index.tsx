import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/smallScreen.css';
import './assets/css/largeScreen.css';
import './assets/css/mediumScreen.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes/routes';

ReactDOM.render(Routes, document.getElementById('root'));

serviceWorker.unregister();
