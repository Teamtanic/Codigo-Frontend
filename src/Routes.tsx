import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
  } from "react-router-dom";
  
  //#region Pages
  import Home from "./screens/Home/Home";
  //#endregion
  
  function Routes() {
    return (
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </Router>
    );
  }
  
  export default Routes;