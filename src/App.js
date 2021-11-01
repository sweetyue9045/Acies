import './App.css';
import HOME from './pages/Home'
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HOME} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
