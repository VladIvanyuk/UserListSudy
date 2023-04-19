import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
let transparent = {r: 0.0, g: 0.0, b: 0.0, а: 1.0 }
const {r, g, b} = transparent;

console.log(g)