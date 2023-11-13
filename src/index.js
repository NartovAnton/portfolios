import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let postsData = [
  { id: 1, message: 'Hallo', like: 100 },
  { id: 2, message: 'Heute ist gutes Wetter', like: 500 },
  { id: 3, message: 'Wer möchten zusammen ein Film sehen?', like: 4 },
  { id: 3, message: 'Wer möchten zusammen ein Film sehen?', like: 4 },
  { id: 3, message: 'Wer möchten zusammen ein Film sehen?', like: 4 },
  { id: 3, message: 'Wer möchten zusammen ein Film sehen?', like: 4 },
  { id: 3, message: 'Wer möchten zusammen ein Film sehen?', like: 4 },
  { id: 3, message: 'Wer möchten zusammen ein Film sehen?', like: 4 },
]

let dialogsData = [
  { id: 1, name: 'Anton' },
  { id: 2, name: 'Maria' },
  { id: 3, name: 'Alex' },
  { id: 4, name: 'Elina' },
  { id: 5, name: 'Issak' },
  { id: 6, name: 'Anna' },
  { id: 7, name: 'Kan' },
  { id: 8, name: 'Anastasia' },
  { id: 9, name: 'Luba' },

]
let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hallo,heute abend sehe ich einen Film' },
  { id: 3, message: 'Vielleicht können wir zusammen sehen?' },
  { id: 4, message: 'Ja natürlich, um 7 uhr?' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
