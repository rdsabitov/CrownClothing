//import './categories.styles.scss';
//import './components/category-item/category-item.component'

import { Outlet } from 'react-router-dom';
import CategorySingles from '../../components/category-dir/category-singles.component';

const Home = () => {
  return (
  <div> 
    <CategorySingles />; 
    <Outlet/>
    </div>
  )
};

export default Home;
