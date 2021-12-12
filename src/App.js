import "./App.css";
import HOME from "./pages/Home"
import BOARD from "./pages/Board"
import GAME from "./pages/Game"
import TEAM from "./pages/Team"
import LOGIN from "./pages/Login"
import LIST from "./pages/AllArticle"
import ADD from "./pages/AddArticle"
import EDIT from "./pages/EditArticle"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ScrollToTop from "./pages/ScrollToTop";
import { useState, useEffect, createContext } from "react";
import { StoreProvider } from "./store";

const URL = "https://test-1129.herokuapp.com/api/v1/article";

export const API = createContext();

function App() {
  const [APIs, setAPIs] = useState([]);
  const fetchMessages = () => {
    fetch(`${URL}/all`)
      .then((res) => res.json())
      .then((data) => setAPIs(data.reverse()))
  }
  useEffect(() => {
    fetchMessages()
  }, []);
  return (

    <StoreProvider>
    <BrowserRouter>
        <ScrollToTop />
        <Switch>
        <API.Provider value={APIs}>
          <Route exact path="/" component={HOME} />
          <Route path="/board" component={BOARD} />
          <Route path="/game" component={GAME} />
          <Route path="/team" component={TEAM} />
          <Route path="/admin" component={LOGIN} />
          <Route path="/list" component={LIST} />
          <Route path="/add" component={ADD} />
          <Route path="/article/:articleId" component={EDIT} />
        </API.Provider>
      </Switch>
    </BrowserRouter>
    </StoreProvider>
  );
}
export default App;

