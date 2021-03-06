import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './container/Home/Home'
import Signin from './container/Signin/Signin'
import Signup from './container/Signup/Signup'
import PrivateRoute from './components/HOC/privateRoute'
import {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {isUserLoggedIn } from './actions'
import Products from './container/Products/Products'
import Orders from './container/Orders/Orders'
import Category from './container/Category/Category'
import {getInitialData} from './actions/initialData.actions'



function App() {
  const dispatch =useDispatch()
  const auth =useSelector(state =>state.auth)


  useEffect(()=>{
    if(!auth.authenticate){
        dispatch(isUserLoggedIn())
    }
    dispatch(getInitialData())
},[])

  return (
    <div className="App">
      <Routes>
        <Route exact element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>

        <Route exact element={<PrivateRoute />}>
          <Route exact path="/products" element={<Products/>} />
        </Route>

        <Route exact element={<PrivateRoute />}>
          <Route exact path="/orders" element={<Orders/>} />
        </Route> 

        <Route exact element={<PrivateRoute />}>
          <Route exact path="/category" element={<Category/>} />
        </Route> 

        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
