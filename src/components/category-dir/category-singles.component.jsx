import CategoryItem from '../category-item/category-item.component.jsx';
import './category-singles.styles.scss';

const CategorySingles = ({categories}) => { 
    
      return (
        <div className="directory-container">
          {categories.map((category) => (
          <CategoryItem key = {category.id} category={category} />
          ))}
          
        </div>
      );
    };    



export default CategorySingles