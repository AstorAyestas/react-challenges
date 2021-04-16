import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import One from './components/One/One';

function App() {
    return (
        <div className="App">
            <Header /> 
            <Router>
                <ul>
                    <li>
                        <Link to ='/one'>
                            <div className="my-4 bg-gray-100">
                                <h5 className='text-gray-700'>Ejercicio 1
                                </h5>
                            </div> 
                        </Link>
                    </li>
                </ul>

            <Switch>
                <Route path='/one'>
                    <One />                      
                </Route>
            </Switch>

            </Router>  
        </div>
    );
}

export default App;
