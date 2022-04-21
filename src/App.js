import { Routes, Route} from 'react-router-dom';
import Header  from './components/Header';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  
	return (
			<div>
				<Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>  
			</div>

	);
}

export default App;
