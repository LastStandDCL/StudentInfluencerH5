import {useRoutes} from "react-router-dom";
import routes from "./routes";
import OnRouterBefore from "./routes/OnRouterBefore";

function App() {

    const element = useRoutes(routes);

    return <OnRouterBefore routers={element}/>;
}

export default App;
