import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomePage from './pages/homepage/Homepage';
import Login from "./pages/login/Login";
import User from "./pages/user/User";

function MainRoutes (){
    return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />}>
            </Route>
        </Routes>

        <Routes>
            <Route path="/login" element={<Login />}>
            </Route>
        </Routes>

        <Routes>
            <Route path="/user" element={<User />}>
            </Route>
        </Routes>
    </Router>
    )
}
export default MainRoutes;