import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import MainRouter from './router/MainRouter.jsx';
import { Provider } from 'react-redux';
import store from './store/store';

import { registerSW } from 'virtual:pwa-register';

registerSW({});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={MainRouter} />,
  </Provider>,
);
