import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import One from './components/One/One';
import Two from './components/Two/Two';

function App() {
    return (
        <div className="App">
            <Header /> 
            <Router>
                <ul>
                    <li className="p-2 mx-2 my-4 text-center bg-gray-100 shadow-md hover:bg-gray-200">
                        <Link to ='/one'>                            
                                <h5 className='text-gray-600'>Ejercicio 1</h5>                             
                        </Link>
                    </li>                    
                    <li className="p-2 mx-2 my-4 text-center bg-gray-100 shadow-md hover:bg-gray-200">
                        <Link to ='/two'>
                                <h5 className='text-gray-600'>Ejercicio 2</h5>
                        </Link>
                    </li>
                </ul>

            <Switch>
                <Route path='/one'>
                    <One />                      
                </Route>
                <Route path='/two'>
                    <Two />                      
                </Route>
            </Switch>

            </Router>  
        </div>
    );
}

export default App;
