import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/header';
import {Globalstyle} from './style';
import store from './store/sto'
import A1 from './page/a1/pagea1';
import A2 from './page/a2/pagea2';
import B1 from './page/b1/pageb1';
import C1 from './page/c1/pagec1';
import C2 from './page/c2/pagec2';
import D1 from './page/d1/paged1';
import D3 from './page/d3/paged3';
import D4 from './page/d4/paged4';
import D5 from './page/d5/paged5';
import D7 from './page/d7/paged7';
import D8 from './page/d8/paged8';
import D9 from './page/d9/paged9';
import D11 from './page/d11/paged11';
import D10 from './page/d10/paged10';
class App extends Component {
  render() {
    return (
        <Provider store={store}>
      	<BrowserRouter>
      		<div>
                <Globalstyle/>
      			<Route path='/' exact component={Header}></Route>
                <Route path='/a1' exact component={A1}></Route>
                <Route path='/a2' exact component={A2}></Route>
                <Route path='/b1' exact component={B1}></Route>
                <Route path='/c1' exact component={C1}></Route>
                <Route path='/c2' exact component={C2}></Route>
                <Route path='/d1' exact component={D1}></Route>
                <Route path='/d3' exact component={D3}></Route>
                <Route path='/d4' exact component={D4}></Route>
                <Route path='/d5' exact component={D5}></Route>
                <Route path='/d8' exact component={D8}></Route>
                <Route path='/d9' exact component={D9}></Route>
                <Route path='/d7' exact component={D7}></Route>
                <Route path='/d11' exact component={D11}></Route>
                <Route path='/d10' exact component={D10}></Route>
      		</div>
      	</BrowserRouter>
        </Provider>
    );
  }
}

export default App;
