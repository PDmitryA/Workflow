import React from "react";
import ReactDOM from 'react-dom';
import Workflow from './react/Workflow.jsx';
import {Provider} from 'react-redux';
import store from './redux/stores.js';

ReactDOM.render(<Provider store={store} ><Workflow /></Provider>, document.getElementById('root'));