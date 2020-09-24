import React from 'react';
import ReactDOM from 'react-dom';
import './todolist.css';
import TodoList from './todolist.js';
import {Arwes, ThemeProvider, createTheme } from 'arwes';

ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme={createTheme()}>
    <Arwes classes={{pattern:"todopattern"}} animate show>
	<TodoList />
    </Arwes>
   </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
