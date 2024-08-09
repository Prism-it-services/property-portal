import {PropertyList} from './components/PropertyList'
import './App.css';
import GlobalStyle from './GlobalStyles';
import { BrowserRouter,  Router, Route, Routes } from 'react-router-dom';
import PropertyDetail  from './components/PropertyDetail';
import CreatePropertyForm from './components/CreatePropertyForm';
import { ApolloProvider} from '@apollo/client';
import { client} from './graphqlApolloClient/apolloClient';


function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
    <GlobalStyle/>
    <div className="App">
     <h1>Welcome to property portal</h1>
    <Routes>
     <Route path="/" element={<PropertyList/>}></Route>
     <Route path="/property/:id" element ={<PropertyDetail/>} ></Route>
     <Route path="/create-property" element ={<CreatePropertyForm/>} ></Route>
     </Routes>
    </div>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
