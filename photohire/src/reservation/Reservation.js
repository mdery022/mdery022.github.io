import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Info from './info/Info';
import Complete from './complete/Complete';

function Reservation() {
    return (
        <Router>
            <Switch>
                <Route path="/reservation/complete">
                    <Complete />
                </Route>
                <Route path="/reservation/:id">
                    <Info />
                </Route>
            </Switch>
        </Router>
    );
}

export default Reservation;