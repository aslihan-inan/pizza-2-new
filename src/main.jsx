import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App.jsx";
import Siparis from "./components/siparisi";
import Onay from "./components/onay";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/siparis" component={Siparis} />
        <Route path="/onay" component={Onay} />
      </Switch>
    </Router>
  </React.StrictMode>
);
