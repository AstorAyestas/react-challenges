import Box from './components/Box';
import './App.css';
import elements from './utils/elements';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header />
            {
                elements.map((element, index) =>
                    <div className="flex justify-center">
                        <Box initialState={element} key={index} />
                    </div>
                )
            }
        </div>
    );
}

export default App;
