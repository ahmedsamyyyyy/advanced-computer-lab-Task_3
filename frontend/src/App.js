import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UsersList from './components/UsersList';
import BlogList from './components/BlogList';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"
        element={<Home/>}/>
        <Route path="/users"
        element={<UsersList/>}/>
        <Route path="/filter"
        element={<BlogList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
