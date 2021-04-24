import { Router } from '@reach/router';
import Header from './components/Header';
import Two from './components/Two/Two';
import Main from './components/Main';
import One from './components/One/One';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Home path='react-challenges' />
                <Main path='react-challenges/main' >
                    <One path='one' />
                    <Two path='two' />
                </Main>
                <NotFound default />
            </Router>
        </div>
    );
}

export default App;
