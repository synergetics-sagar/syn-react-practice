import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import dataTableReducer from "./react-router/data-table/dataTableSlice"
import CustomComponentRefExample from './react-ref/custom-component-ref/CustomComponentRefExample';
import HocExample from './hoc/HocExample';
const root = ReactDOM.createRoot(document.getElementById('root'));
const reducer = combineReducers({
    users: dataTableReducer
})
const store = configureStore({reducer})
root.render(
    <HocExample />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
