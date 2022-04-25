import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import  { Provider as ReduxProvider } from 'react-redux'
import {store} from './Redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ChakraProvider>
  <BrowserRouter>
   <ReduxProvider store={store}>
    <App />
    </ReduxProvider>
  </BrowserRouter>
  </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
