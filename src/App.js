import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Switch
} from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Find from "./components/Freelancer";
import Register from "./components/Register";
import Home from "./components/Home";
import FreelancerPage from "./components/FreelancerPage";

import PrivateRoute from "./PrivateRoute";

import Dashboard from './components/Dashboard'
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home></Home>} />
				<Route path="/find" element={<Find></Find>} />
				
				<Route path="/login" element={<Login></Login>} />
				<Route path="/register" element={<Register></Register>} />
				<Route path="/logout" element={<Logout></Logout>} />
				<Route path="/freelancer/:id" element={<FreelancerPage></FreelancerPage>} />
				<Route path="/dashboard" element={<PrivateRoute />} />
				

			</Routes>
		</Router>
	);
}

export default App;
