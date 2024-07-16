import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
        <Heading />
        <Sidebar />
        <Body />
    </div>
  );
}

export default App;
