import React from "react";
import { Route, Switch } from "react-router-dom";

import OFirmie from "../pages/OFirmie";
import { withRouter } from "react-router-dom";
import Certyfikaty from "../pages/Certyfikaty";
import Kontakt from "../pages/Kontakt";
import Oferta from "../pages/Oferta";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={OFirmie} />
        <Route path="/certyfikaty" component={Certyfikaty} />
        <Route path="/oferta" component={Oferta} />{" "}
        <Route path="/kontakt" component={Kontakt} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default withRouter(Page);
