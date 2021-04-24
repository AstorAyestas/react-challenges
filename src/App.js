import { Router } from '@reach/router';
import Header from './components/Header';
import Two from './components/Two/Two';
import Main from './components/Main';
import One from './components/One/One';
import './App.css';
import Home from './components/Home';

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Home path='/' />
                <Main path='main' >
                    <One path='one' />
                    <Two path='two' />
                </Main>
            </Router>
        </div>
    );
}

export default App;
