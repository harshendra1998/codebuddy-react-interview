import Router from './Router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import store from './redux/store'
import { Provider } from 'react-redux';

const App = () => <Provider store={store}><Router /></Provider>;

export default App;
