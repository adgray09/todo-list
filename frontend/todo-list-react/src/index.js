import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { uriName } from './environmentManager';


import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink
} from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'https://ag-todolist-api.herokuapp.com/'
})

// console.log(httpLink)

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
