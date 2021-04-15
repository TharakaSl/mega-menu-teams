import { BrowserRouter, Switch, Route } from "react-router-dom";
import Settings from "./components/Settings";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
