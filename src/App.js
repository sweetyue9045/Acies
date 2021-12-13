import "./App.css";
import HOME from "./pages/Home"
import BOARD from "./pages/Board"
import ARTICLE from "./pages/Article"
import GAME from "./pages/Game"
import TEAM from "./pages/Team"
import LOGIN from "./pages/LoginAdmin"
import LIST from "./pages/AllArticle"
import ADD from "./pages/AddArticle"
import EDIT from "./pages/EditArticle"
import ScrollToTop from "./pages/ScrollToTop";

import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useEffect } from "react";
import { StoreProvider } from "./store";

const URL = "https://test-1129.herokuapp.com/api/v1/article";

function App() {
    const fetchMessages = () => {
        fetch(`${URL}/all`)
            .then((res) => res.json())
            .then((data) => {
                const APIs = JSON.stringify(data.reverse());
                window.localStorage.setItem('ArticleAPI', APIs);
            })
    }
    useEffect(() => {
        fetchMessages()
    }, []);

    return (
        <StoreProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={HOME} />
                    <Route path="/board" component={BOARD} />
                    <Route path="/article/:articleId" component={ARTICLE} />
                    <Route path="/game" component={GAME} />
                    <Route path="/team" component={TEAM} />
                    <Route path="/admin" component={LOGIN} />
                    <Route path="/list" component={LIST} />
                    <Route path="/add" component={ADD} />
                    <Route path="/edit/:articleId" component={EDIT} />
                </Switch>
            </BrowserRouter>
        </StoreProvider>
    );
}
export default App;

