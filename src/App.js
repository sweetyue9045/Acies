import './App.css';
import HOME from './pages/Home'
import BOARD from './pages/Board'
import GAME from './pages/Game'
import TEAM from './pages/Team'
import LOGIN from './pages/Login'
import ADMIN from './pages/Admin'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ScrollToTop from './pages/ScrollToTop';
import { StoreProvider } from "./store";


function App() {
  return (
    <StoreProvider>
    <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HOME} />
          <Route path="/board" component={BOARD} />
          <Route path="/game" component={GAME} />
          <Route path="/team" component={TEAM} />
          <Route path ="/login" component={LOGIN} />
          <Route path="/admin" component={ADMIN} />
        </Switch>
    </BrowserRouter>
    </StoreProvider>
  );
}
export default App;

