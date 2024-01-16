import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import Department from './components/Department';
import Employee from './components/Employee';
import './App.css';


function App() {
	return (
		<Router>
			<div className="App">
				<h1>CRUD Application</h1>
				<ul className='navList'>
					<li><Link to='/' className='link'>Employee</Link></li>
					<li><Link to='/department' className='link'>Department</Link></li>
				</ul>
				<Routes>
					<Route path='/' element={<Employee/>} />
					<Route path ='/department' element={<Department/>} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
