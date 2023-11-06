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
import { ListProductWarehouse } from "./screens/Warehouse/ListProductWarehouse";
import { ListProject } from "./screens/Project/ListProject";
import { ListCourse } from "./screens/RH/Course/ListCourse";
import { ListDepartment } from "./screens/RH/Department/ListDepartment";
import { ListAuthority } from "./screens/RH/Authority/ListAuthority";
import { ListUser } from "./screens/RH/User/ListUser";
import { DetailsCourse } from "./screens/RH/Course/DetailsCourse";
import { DetailsDepartment } from "./screens/RH/Department/DetailsDepartment";
import { ListRoles } from "./screens/RH/Role/ListRole";
import { DetailsRole } from "./screens/RH/Role/DetailsRole";
import { DetailsUser } from "./screens/RH/User/DetailsUser";
import { ListTransaction } from "./screens/Financial/Transaction/ListTransaction";
import { ListBank } from "./screens/Financial/Bank/ListBank";
import { DetailsProductWarehouse } from "./screens/Warehouse/DetailsProductWarehouse";
import { DetailsBank } from "./screens/Financial/Bank/DetailsBank";
import { DetailsTransaction } from "./screens/Financial/Transaction/DetailsTransaction";
//#endregion

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<PasswordRecovery />} />
        <Route path="/teste" element={<Home />} />

        <Route path="/empresas" element={<ListCompany />} />
        <Route path="/empresa" element={<DetailsCompany />} />

        <Route path="/almoxarifado" element={<ListProductWarehouse />} />
        <Route path="/produto" element={<DetailsProductWarehouse />} />

        <Route path="/projetos" element={<ListProject />} />

        <Route path="/transacoes" element={<ListTransaction />} />
        <Route path="/transacao" element={<DetailsTransaction />} />

        <Route path="/bancos" element={<ListBank />} />
        <Route path="/banco" element={<DetailsBank />} />

        <Route path="/cursos" element={<ListCourse />} />
        <Route path="/curso" element={<DetailsCourse />} />

        <Route path="/cargos" element={<ListRoles />} />
        <Route path="/cargo" element={<DetailsRole />} />

        <Route path="/departamentos" element={<ListDepartment />} />
        <Route path="/departamento" element={<DetailsDepartment />} />

        <Route path="/autoridades" element={<ListAuthority />} />

        <Route path="/privileges" element={<ListAuthority />} />

        <Route path="/usuarios" element={<ListUser />} />
        <Route path="/usuario" element={<DetailsUser />} />

      </Switch>
    </Router>
  );
}

export default Routes;