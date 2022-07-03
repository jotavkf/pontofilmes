import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './Contexts/CartContext';
import Home from './Pages/Home.js';
import Checkout from './Pages/Checkout.js';
import Page404 from './Pages/404';

function App() {
	return (
		<div className='App'>
			<CartProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='*' element={<Page404 />} />
				</Routes>
			</CartProvider>
		</div>
	);
}

export default App;
