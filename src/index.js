import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store.js'
import { Provider } from 'react-redux';
import { QueryClientProvider,QueryClient } from 'react-query';
import { Toaster } from 'react-hot-toast';

const queryClient=new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

  
     <Provider store={store}>

  <App />
  </Provider>
  </QueryClientProvider>
  <Toaster />
  </React.StrictMode>
);
