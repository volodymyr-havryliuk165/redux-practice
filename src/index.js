import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { debounce } from 'debounce';
import { saveState } from './app/browserStorage';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 500)
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
