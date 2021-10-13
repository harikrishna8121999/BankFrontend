import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CreateAccountComponent from "./components/CreateAccountComponent";
import ListAccountComponent from "./components/ListAccountComponent";
import UpdateAccountComponent from "./components/UpdateAccountComponent";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={ListAccountComponent} />

          <Route path="/list_account" component={ListAccountComponent} />

          <Route path="/add-account" component={CreateAccountComponent} />
          <Route path="/update-account/:id" component={UpdateAccountComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
