import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

//#region Pages
import Home from "./screens/Home/Home";
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
import { ListDocument } from "./screens/Documents/ListDocument";
import { DetailsDocument } from "./screens/Documents/DetailsDocument";
import { CreateUser } from "./screens/RH/User/CreateUser";
import { DetailsProject } from "./screens/Project/DetailsProject";
import { DetailsOffer } from "./screens/Offer/DetailsOffer";
import { ListOffer } from "./screens/Offer/ListOffer";
import { Login } from "./screens/RH/User/Login";
import { RecoveryPassword } from "./screens/RH/User/RecoveryPassword";
//#endregion

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar-senha" element={<RecoveryPassword />} />
        <Route path="/teste" element={<Home />} />

        <Route path="/empresas" element={<ListCompany />} />
        <Route path="/empresa/:id" element={<DetailsCompany />} />

        <Route path="/almoxarifado" element={<ListProductWarehouse />} />
        <Route path="/produto/:id" element={<DetailsProductWarehouse />} />

        <Route path="/ofertas" element={<ListOffer />} />
        <Route path="/oferta/:id" element={<DetailsOffer />} />

        <Route path="/projetos" element={<ListProject />} />
        <Route path="/projeto/:id" element={<DetailsProject />} />

        <Route path="/transacoes" element={<ListTransaction />} />
        <Route path="/transacao/:id" element={<DetailsTransaction />} />

        <Route path="/bancos" element={<ListBank />} />
        <Route path="/banco/:id" element={<DetailsBank />} />

        <Route path="/cursos" element={<ListCourse />} />
        <Route path="/curso/:id" element={<DetailsCourse />} />

        <Route path="/cargos" element={<ListRoles />} />
        <Route path="/cargo/:id" element={<DetailsRole />} />

        <Route path="/departamentos" element={<ListDepartment />} />
        <Route path="/departamento/:id" element={<DetailsDepartment />} />

        <Route path="/autoridades" element={<ListAuthority />} />

        <Route path="/privileges" element={<ListAuthority />} />

        <Route path="/registro" element={<CreateUser />} />
        <Route path="/usuarios" element={<ListUser />} />
        <Route path="/usuario/:id" element={<DetailsUser />} />

        <Route path="/documentos" element={<ListDocument />} />
        <Route path="/documento/:id" element={<DetailsDocument />} />

      </Switch>
    </Router>
  );
}

export default Routes;