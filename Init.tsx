import {Provider} from 'react-redux';
import {store} from './src/app/store/store';
import App from './App';

function Init(): React.JSX.Element {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Init;
