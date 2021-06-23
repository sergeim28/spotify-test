import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter
} from "react-router-dom";
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CoreLayout>
        <Routes />
      </CoreLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
