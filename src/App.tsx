
import { Provider } from 'react-redux';
import store from './store/index';
import './App.css';
import Posts from './components/Posts';

function App() {

  return (
    <>
      <Provider store={store}>
        <Posts />
      </Provider>
    </>
  );
}

export default App;
