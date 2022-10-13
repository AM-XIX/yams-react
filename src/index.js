import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import styled from 'styled-components';

import message from './store/reducers/message';

const Wrapper = styled.section`
background-image : url(https://wallup.net/wp-content/uploads/2017/11/22/368970-minimalism-simple-dice-water-dots-reflection-lights.jpg);
background-size: cover;
`;

const store = configureStore({
  reducer: {
    message
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
// Contextualise le store pour l'arbre React à l'aide du Provider 
root.render(
  <Wrapper>
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  </Wrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
