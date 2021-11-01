import './App.css';
import ENTER from './pages/Enter'
import HOME from './pages/Home'
import NEWS from './pages/News'
import GAME from './pages/Game'
import TEAM from './pages/Team'
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ENTER} />
        <Route path="/home" component={HOME} />
        <Route path="/news" component={NEWS} />
        <Route path="/game" component={GAME} />
        <Route path="/team" component={TEAM} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
