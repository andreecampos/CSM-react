
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './pages/Header';
import Posts from './posts/Posts';
import './index.css'
import Detail from './posts/Detail';



function App() {
 

  return (
    <>
    <Router>
    <div className='container'>
      <Routes>
        <Route path='/posts/:id' element={<Detail/>}/>
        <Route path='/' element={<Header />}/>
        <Route path='/posts' element={<Posts />}/>
      </Routes>
    </div>

    </Router>
    
    </>
  );
}

export default App;
