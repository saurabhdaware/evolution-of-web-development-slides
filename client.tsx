import React from "react";
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from "./App";

const rootDOM = document.querySelector('#root');

if (!rootDOM) {
  throw new Error('No root')
}


ReactDOMClient.hydrateRoot(rootDOM, <BrowserRouter><App /></BrowserRouter>)