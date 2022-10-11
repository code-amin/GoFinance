import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { Auth0Provider } from "@auth0/auth0-react";

const { REACT_APP_DOMAIN, REACT_APP_CLIENTID } = process.env;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <React.StrictMode>
    <Auth0Provider
      domain={REACT_APP_DOMAIN}
      clientId={REACT_APP_CLIENTID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
   </React.StrictMode> 
);
