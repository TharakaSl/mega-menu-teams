import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
