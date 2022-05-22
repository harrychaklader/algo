import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import transakSDK from '@transak/transak-sdk';

let transak = new transakSDK({
  apiKey: '5ec90929-5051-4973-a855-c2cbdf835e9e',
  environment: 'STAGING',
  hostURL: window.location.origin,
  widgetHeight: '625px',
  widgetWidth: '500px',
  defaultCryptoCurrency: 'USDC',
  themeColor: '000',
  fiatCurrency: 'USD',
  fiatAmount: '50',
  networks: 'algorand,solana',
  defaultNetwork: 'algorand'
});

transak.init();

// To get all the events
transak.on(transak.ALL_EVENTS, (data) => {
  console.log(data)
});

// This will trigger when the user marks payment is made.
transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
  console.log(orderData);
  transak.close();
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
