import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
  } from "react-router-dom";
  
  //#region Pages
  import Home from "./screens/Home/Home";
  import PasswordRecovery from "./screens/Home/RecoveryPassword";
import { ListCompany } from "./screens/Company/ListCompany";
import { DetailsCompany } from "./screens/Company/DetailsCompany";
  //#endregion
  
  function Routes() {
    return (
      <Router>
        <Switch>
          <Route path="/" element={<PasswordRecovery />} />
          <Route path="/teste" element={<Home />} />
          <Route path="/empresas" element={<ListCompany />} />
          <Route path="/empresa" element={<DetailsCompany />} />
        </Switch>
      </Router>
    );
  }
  
  export default Routes;