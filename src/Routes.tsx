import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
  } from "react-router-dom";
  
  //#region Pages
  import Home from "./screens/Home/Home";
  import PasswordRecovery from "./screens/Home/RecoveryPassword";
import { ListCompany } from "./screens/Home/Company/ListCompany";
  //#endregion
  
  function Routes() {
    return (
      <Router>
        <Switch>
          <Route path="/" element={<PasswordRecovery />} />
          <Route path="/teste" element={<Home />} />
          <Route path="/empresas" element={<ListCompany />} />
        </Switch>
      </Router>
    );
  }
  
  export default Routes;