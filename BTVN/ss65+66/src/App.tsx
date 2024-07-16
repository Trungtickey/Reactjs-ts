// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import Profile from './components/bt3';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <bt3/>
      </div>
    </Provider>
  );
};

export default App;
