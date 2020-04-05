import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import App from "./App";
ReactDOM.render(React.createElement(Provider, { store: chosenStore },
    React.createElement(ConnectedRouter, { history: history },
        React.createElement(App, null)),
    React.createElement(GatewayDispatcher, null)), document.getElementById("app"));
//# sourceMappingURL=index.js.map