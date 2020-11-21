import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreProvider} from './StoreProvider'
import {initialState} from './reducer&state/initialState'
import {reducer} from './reducer&state/reducer';


ReactDOM.render(
    <StoreProvider initialState={initialState} reducer={reducer}>
        <App />
    </StoreProvider>
    ,document.getElementById('root'))