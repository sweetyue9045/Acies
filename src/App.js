import './App.css';
import HOME from './pages/Home'
import BOARD from './pages/Board'
import GAME from './pages/Game'
import TEAM from './pages/Team'
import ADMIN from './pages/Admin'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ScrollToTop from './pages/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HOME} />
          <Route path="/board" component={BOARD} />
          <Route path="/game" component={GAME} />
          <Route path="/team" component={TEAM} />
          <Route path="/admin" component={ADMIN} />
        </Switch>
    </BrowserRouter>
  );
}
export default App;

