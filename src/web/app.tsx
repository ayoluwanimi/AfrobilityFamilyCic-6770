import { Route, Switch } from "wouter";
import Index from "./pages/index";
import Donate from "./pages/donate";
import { Provider } from "./components/provider";

function App() {
        return (
                <Provider>
                        <Switch>
                                <Route path="/" component={Index} />
                                <Route path="/donate" component={Donate} />
                        </Switch>
                </Provider>
        );
}

export default App;
