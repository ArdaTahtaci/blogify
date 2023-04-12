import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store.js";
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Container } from 'reactstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <App />
      </Container>
    </BrowserRouter>

  </Provider>


);


