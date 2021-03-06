import { Routes, Route} from 'react-router-dom';
import Header  from './components/Header';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
import { makeStyles } from '@mui/styles';
import './App.css';


function App() {
  
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh'
    }
  }))

  const classes = useStyles()
	return (
		<div className={classes.App}>
			<Header />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/coins/:id' element={<CoinPage />} />
			</Routes>
		</div>
	);
}

export default App;
