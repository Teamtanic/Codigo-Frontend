import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
  } from "react-router-dom";
  
  //#region Pages
  import Home from "./screens/Home/Home";
  import PasswordRecovery from "./screens/Home/RecoveryPassword";
  //#endregion
  
  function Routes() {
    return (
      <Router>
        <Switch>
          <Route path="/" element={<PasswordRecovery />} />
        </Switch>
      </Router>
    );
  }
  
  export default Routes;