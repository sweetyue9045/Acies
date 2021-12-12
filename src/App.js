import "./App.css";
import HOME from "./pages/Home"
import BOARD from "./pages/Board"
import GAME from "./pages/Game"
import TEAM from "./pages/Team"
import LIST from "./pages/AllArticle"
import ADD from "./pages/AddArticle"
import EDIT from "./pages/EditArticle"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ScrollToTop from "./pages/ScrollToTop";
import { useState, useEffect, createContext } from "react";

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
    <BrowserRouter props={fetchMessages.bind(this)} >
      <ScrollToTop />
      <Switch>
        <API.Provider value={APIs}>
          <Route exact path="/" component={HOME} />
          <Route path="/board" component={BOARD} />
          <Route path="/game" component={GAME} />
          <Route path="/team" component={TEAM} />
          {/* <Route path="/admin" component={ADMIN} /> */}
          <Route path="/admin/list" component={LIST} />
          <Route path="/admin/add" component={ADD} />
          <Route path="/admin/article/:articleId" component={EDIT} />
        </API.Provider>
      </Switch>
    </BrowserRouter>
  );
}
export default App;

