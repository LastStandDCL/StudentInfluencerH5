import {useRoutes} from "react-router-dom";
import routes from "./routes";
import OnRouterBefore from "./routes/OnRouterBefore";
import Globals from "./Globals";
import {Button, ConfigProvider} from "antd";
import React from "react";

function App() {

    const element = useRoutes(routes);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: Globals.npu_color,
                },
            }}
        >
            <OnRouterBefore routers={element}/>
        </ConfigProvider>
    );
}

export default App;
