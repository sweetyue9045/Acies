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
import animationData from "./assets/lotties/loading.json";
import Loading from "./components/Loading";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useEffect , useState } from "react";
import { StoreProvider } from "./store";

const URL = "https://test-1129.herokuapp.com/api/v1/article";

function App() {
    const [done,setDone]=useState(undefined);
    const [completed, setcompleted] = useState(undefined);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    useEffect(() => {
        setDone(true);

        setTimeout(() => {
            setcompleted(true);
        }, 3000);

    }, [])

    const fetchMessages = () => {
        fetch(`${URL}/all`)
            .then((res) => res.json())
            .then((data) => {
                const APIs = JSON.stringify(data.reverse());
                window.localStorage.setItem("ArticleAPI", APIs);
            })
    }
    useEffect(() => {
        fetchMessages()
    }, []);
    return (
        <>
            {!completed ? (
                <Loading></Loading>
            ) : (
                <StoreProvider>
                    <BrowserRouter>
                        <ScrollToTop />
                        <Switch>
                            <Route exact path="/" component={HOME} />
                            <Route exact path="/board" component={BOARD} />
                            <Route path="/board/:articleId" component={ARTICLE} />
                            <Route path="/game" component={GAME} />
                            <Route path="/team" component={TEAM} />
                            <Route exact path="/admin" component={LOGIN} />
                            <Route path="/admin/list" component={LIST} />
                            <Route path="/admin/add" component={ADD} />
                            <Route path="/admin/edit/:articleId" component={EDIT} />
                        </Switch>
                    </BrowserRouter>
                </StoreProvider>
            )}

        </>
    );
}
export default App;

