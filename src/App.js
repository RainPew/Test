import './App.css';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import AdminTemplate from './page/AdminTemplate';
import Login from './page/Login';
import PageNotFound from './page/PageNotFound';
import Detail from './page/Detail';
import Home from './page/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AdminTemplate />}>
          <Route path='/' element={<Home />}/>
          <Route path='/detail' element={<Detail />}/>
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
