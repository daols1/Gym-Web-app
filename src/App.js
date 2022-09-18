import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Classes from './Pages/Classes';
import Pages from './Pages/Pages';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import SharedLayout from './Components/SharedLayout';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path='/about' element= {<About />} />
          <Route path='/classes' element= {<Classes />} />
          <Route path='/pages' element= {<Pages />} />
          <Route path='/blog' element= {<Blog />} />
          <Route path='/pages' element= {<Pages />} />
          <Route path='/contact' element= {<Contact />} />
          <Route path='/*' element= {<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
