import './App.css';
import {Routes,Route} from "react-router-dom"
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Counter } from './components/Counter/Counter';
import { WriteBlog } from './components/writeBlog/writeBlog';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/write" element={<WriteBlog />}></Route>
      {/* <Route path="/signin" element={<SignIn/>}/> */}
    </Routes>
    </div>
  );
}

export default App;
