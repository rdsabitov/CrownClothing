//import './categories.styles.scss';
//import './components/category-item/category-item.component'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

// const Navigation = () => { 
//   return ( 
//     <div>
//       <div>
//         <h1>I am the navigation bar</h1>
//       </div>
//       <Outlet/>
//     </div>
//   )
// }
const App = () => {
  return ( 
  <Routes> 
    <Route path='/' element={ <Navigation/>} >
      <Route index  element={<Home/>} /> 
      <Route path='sign-in' element={<SignIn/>}/>
      {/* //<Route path='shop' element={<Shop />} /> */}
   </Route>

  </Routes>
 
  );
};

export default App;
