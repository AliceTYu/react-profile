import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {

	return (
		<>
			<Header></Header>
			<div className='main'>
				<Outlet/>
			</div>
			<Footer></Footer>
		</>
	);
}

export default App;
