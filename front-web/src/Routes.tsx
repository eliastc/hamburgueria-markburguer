import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Pedidos";


function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path='/pedidos'>
                    <Orders />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

//npm uninstall react-router-dom (desinstalar essa versao )
//npm install react-router-dom@5.2.0 (instalar essa)
