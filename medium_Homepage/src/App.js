import './App.css';
import { Blogs_after_login } from './components/After_login/Blogs_after_login';
import { FilterTag } from './components/After_login/filter_by_tag';
import { Blogs_before_login } from './components/Before_login/Blogs_before_login';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     {/* <Blogs_before_login /> */}
     {/* <Blogs_after_login/> */}
     {/* <FilterTag/> */}
     <Routes>
             <Route path={"/a_log"} element={<Blogs_after_login /> }></Route>
            <Route path={"/b_log"} element={<Blogs_before_login /> }></Route>
            <Route path={"/tags"} element={<FilterTag/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
