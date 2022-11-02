//import './categories.styles.scss';
//import './components/category-item/category-item.component'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
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
      <Route path='shop' element={<Shop />} />
      <Route path='auth' element={<Authentication/>}/>
      {/* //<Route path='shop' element={<Shop />} /> */}
   </Route>

  </Routes>
 
  );
};

export default App;
