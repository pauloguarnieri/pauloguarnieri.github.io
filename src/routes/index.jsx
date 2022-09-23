import { Route, Switch } from "react-router-dom";
import Capstonem4Page from "../pages/GDDE";
import KenzieHubPage from "../pages/kenziehub";
import KinemaPage from "../pages/kinema";
import MainPage from "../pages/MainPage";


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' >
                <MainPage />
            </Route>
            <Route path='/project/kenziehub'>
                <KenzieHubPage />
            </Route>
            <Route path='/project/gdde'>
                <Capstonem4Page />
            </Route>
            <Route path='/project/kinema'>
                <KinemaPage />
            </Route>
        </Switch>
    )
};

export default Routes;