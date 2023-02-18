import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import './App.css';
import Home from './Home/home';
import ExploreParent from './vscode-folder-structure/parent';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explorer' element={<ExploreParent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
