import { Router } from '@reach/router';
import Header from './components/Header';
import Two from './components/Two/Two';
// import Main from './components/Main';
import One from './components/One/One';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Home path='react-challenges' />
                {/* <Main path='react-challenges/main' > */}
                <One path='react-challenges/one/*' />
                <Two path='react-challenges/two/*' />
                {/* </Main> */}
                <NotFound default />
            </Router>
        </div>
    );
}

export default App;
