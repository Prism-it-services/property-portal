import {PropertyList} from './components/PropertyList'
import './App.css';
import GlobalStyle from './GlobalStyles';


function App() {
  return (
    <>
    <GlobalStyle/>
    <div className="App">
     <h1>Welcome to property portal</h1>
    </div>
    <PropertyList/>
    </>
  );
}

export default App;
