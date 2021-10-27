import AddUsers from "./Components/AddUsers";
import AllUsers from "./Components/AllUsers";
import Landing from "./Components/Landing";
import NavBar  from "./Components/NavBar";
import NotFound from "./Components/NotFound"

import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import EditUser from "./Components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/allusers" component={AllUsers} />
        <Route exact path="/adduser" component={AddUsers} />
        <Route exact path="/edituser/:id" component={EditUser} />


        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
