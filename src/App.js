import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CreateAccountComponent from "./components/CreateAccountComponent";
import ListAccountComponent from "./components/ListAccountComponent";
import UpdateAccountComponent from "./components/UpdateAccountComponent";
import ViewAccountComponent from "./components/ViewAccountComponent";
import HomeComponent from "./components/HomeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className= "container">
      <Router>
        <Switch>
          <Route path="/" exact component={ListAccountComponent} />

          <Route path="/list_account" component={ListAccountComponent} />

          <Route path="/add-account" component={CreateAccountComponent} />
          <Route path="/update-account/:id" component={UpdateAccountComponent} />
          <Route path="/view-account/:id" component={ViewAccountComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
