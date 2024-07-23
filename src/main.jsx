import React from 'react';
import ReactDOM from 'react-dom/client';
import { CarProvider } from './context/CarProvider';
import App from './router/App';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


root.render(
    <React.StrictMode>
        <CarProvider>
          <App/>
        </CarProvider>
    </React.StrictMode>
)