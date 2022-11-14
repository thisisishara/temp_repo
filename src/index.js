import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/global-components/navbar';
import Home from './components/home';
import Footer from './components/global-components/footer';
import Welcome from './components/home-components/welcome';
import Write from './components/home-components/write';
import Recommendation from './components/home-components/recommendation';
import ProductDetails from './components/home-components/productsDetails';

class Root extends Component {
    render() {
        return(
            <Router>
                <HashRouter basename="/">
                <div>
               
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Welcome} />
                    <Route exact path="/write" component={Write} />
                    <Route exact path="/recommendation" component={Recommendation} />
                    <Route exact path="/pd/:id/:iname/:price" component={ProductDetails} />
               </Switch>
               
                </div>
                </HashRouter>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('pythoninvestigator'));
