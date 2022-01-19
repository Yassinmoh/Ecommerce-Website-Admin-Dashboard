import './App.css';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from './container/Home/Home'
import Signin from './container/Signin/Signin'
import Signup from './container/Signup/Signup'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
