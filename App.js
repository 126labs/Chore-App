import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from './views';
import store from './redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
