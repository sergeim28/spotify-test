import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter
} from "react-router-dom";
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import App from './App.js'
import './styles/_main.scss';
import { QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CoreLayout>
          <App>
            <Routes />
          </App>
        </CoreLayout>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
